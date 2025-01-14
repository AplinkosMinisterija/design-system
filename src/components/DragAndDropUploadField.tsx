import { map } from 'lodash';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { bytesToMb, device, validateFileSizes, validateFileTypes } from '../utils';
import FieldWrapper from './common/FieldWrapper';
import { useKeyAction } from './common/hooks';
import Icon, { IconName } from './common/Icons';
import LoaderComponent from './common/LoaderComponent';

export type FileProps = {
  url: string;
  name: string;
  size: number;
  main?: boolean;
};

export interface FileFieldProps {
  handleError?: (error: 'fileSizesExceeded' | 'badFileTypes') => void;
  onDelete?: (files: File[]) => void;
  onUpload?: (files: File[]) => Promise<void>;
  files: FileProps[] | File[] | any[];
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  customDeleteIcon?: JSX.Element | string;
  error?: string;
  showError?: boolean;
  multiple?: boolean;
  text?: {
    pressToWant?: string;
    uploadOrDragFilesHere?: string;
    fileTypesAndMaxSize?: string;
  };
  maxFileSizeMB?: number;
  availableMimeTypes?: string[];
  availableExtensionsTypes?: string[];
}

const DragAndDropUploadField = ({
  onDelete,
  onUpload,
  multiple = true,
  customDeleteIcon,
  files,
  label = '',
  disabled = false,
  error,
  showError = false,
  text = {
    pressToWant: 'Paspauskite norėdami',
    uploadOrDragFilesHere: 'įkelti arba įtempkite failus čia',
    fileTypesAndMaxSize: 'PDF, PNG, JPEG, JPG (maks. 20MB)',
  },
  handleError = () => {},
  maxFileSizeMB = 20,
  availableMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'],
  availableExtensionsTypes = ['.png', '.jpg', '.jpeg', '.pdf'],
}: FileFieldProps) => {
  const inputRef = useRef<any>(null);
  const [uploadLoading, setUploadLoading] = useState(false);
  const ariaValue = `${label}-upload-instructions`;
  const hideField = disabled && !files?.length;
  const handleKeyDownOnUpload = useKeyAction(() => onButtonClick(), disabled);
  const handleKeyDownOnDelete = useKeyAction((index) => handleDelete(index), disabled);
  const handleSetFiles = async (currentFiles: File[]) => {
    const isValidFileTypes = validateFileTypes(currentFiles, availableMimeTypes);
    if (!isValidFileTypes) return handleError('badFileTypes');
    const isValidFileSizes = validateFileSizes(currentFiles, maxFileSizeMB);
    if (!isValidFileSizes) return handleError('fileSizesExceeded');

    if (onUpload) {
      setUploadLoading(true);
      await onUpload(currentFiles);
      setUploadLoading(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (disabled) return;
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const files: File[] = Array.from(e.dataTransfer.files);
      handleSetFiles(files);
    }
  };

  const handleChange = (e: any) => {
    if (disabled) return;
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const files: File[] = Array.from(e.target.files);
      handleSetFiles(files);
    }
  };

  const onButtonClick = () => {
    if (disabled) return;
    inputRef?.current?.click();
  };

  const handleDelete = (index) => {
    if (onDelete) {
      onDelete([...files.slice(0, index), ...files.slice(index + 1)]);
    }
  };

  if (hideField) {
    return <></>;
  }

  return (
    <Wrapper>
      <FieldWrapper error={error} showError={showError} label={label}>
        {!disabled && (
          <UploadFileContainer
            $error={!!error}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={onButtonClick}
            onKeyDown={handleKeyDownOnUpload()}
            role="button"
            tabIndex={0}
            aria-labelledby={ariaValue}
          >
            <Input
              ref={inputRef}
              type="file"
              accept={availableExtensionsTypes.join(', ')}
              multiple={multiple}
              onChange={handleChange}
            />
            {uploadLoading ? (
              <LoaderComponent />
            ) : (
              <>
                <BigIcon name={IconName.upload} aria-hidden="true" />
                <div>
                  <TextRow id={ariaValue}>
                    <BoldText>{text.pressToWant}</BoldText>
                    <Text>{text.uploadOrDragFilesHere}</Text>
                  </TextRow>
                  <Text>{text.fileTypesAndMaxSize}</Text>
                </div>
              </>
            )}
          </UploadFileContainer>
        )}
      </FieldWrapper>
      {map(files, (file, index) => {
        if (!file) return <></>;

        return (
          <FileContainer key={`${index}-file`}>
            <FileInnerContainer>
              <FileName>{file?.name}</FileName>
              <FileSize>{bytesToMb(file.size)}</FileSize>
            </FileInnerContainer>
            <FileInnerRow>
              <IconContainer
                href={file?.url}
                target="_blank"
                download={file?.name}
                tabIndex={0}
                role="button"
                aria-label={`Download ${file?.name}`}
              >
                <StyledIcon name={IconName.download} />
              </IconContainer>
              {!disabled && (
                <IconContainer
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(index);
                  }}
                  onKeyDown={handleKeyDownOnDelete(index)}
                  tabIndex={0}
                  role="button"
                  aria-label={`Remove ${file?.name}`}
                >
                  {customDeleteIcon || <StyledIcon name={IconName.remove} />}
                </IconContainer>
              )}
            </FileInnerRow>
          </FileContainer>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const IconContainer = styled.a`
  margin-top: auto;
  height: 40px;
  display: flex;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
  @media ${device.mobileL} {
    margin-bottom: 0px;
    height: auto;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.8rem;
  color: #9aa4b2;
  margin: auto 0 auto 0px;
  @media ${device.mobileL} {
    margin: 8px 0 16px 0;
  }
`;

const BigIcon = styled(Icon)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  color: #9aa4b2;
`;

const Text = styled.div`
  font-size: 1.1rem;
  color: #697586;
  text-align: center;
`;

const FileName = styled.div`
  font-size: 1.4rem;
  color: #121926;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 400px;
`;

const FileInnerContainer = styled.div`
  width: 90%;
`;

const FileSize = styled.div`
  font-size: 1.2rem;
  color: #4b5565;
`;
const BoldText = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #121926;
  margin-right: 4px;
`;

const Input = styled.input`
  display: none;
`;

const FileContainer = styled.div<{ opacity?: number }>`
  margin-top: 8px;
  opacity: ${({ opacity }) => opacity || 1};
  position: relative;
  background-color: white;
  border: 1px solid #cdd5df;
  border-radius: 4px;
  padding: 3px 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const FileInnerRow = styled.div`
  display: flex;
  gap: 16px;
`;

const TextRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const UploadFileContainer = styled.div<{ $error: boolean }>`
  cursor: pointer;
  background-color: #eeebe53d;
  border: 2px dashed ${({ theme, $error }) => ($error ? theme.colors.danger : theme.colors.border)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  gap: 4px;
  min-height: 77px;
  &:focus {
    outline: 1px solid ${({ theme }) => theme.colors.primary};
  }
`;

export default DragAndDropUploadField;
