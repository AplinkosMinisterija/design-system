import { map } from 'lodash';
import { useRef, useState } from 'react';
import styled from 'styled-components';
import { bytesToMb, device, validateFileSizes, validateFileTypes } from '../utils';
import Icon from './common/Icons';
import LoaderComponent from './common/LoaderComponent';
import FieldWrapper from './common/FieldWrapper';

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
  error?: string;
  showError?: boolean;
  multiple?: boolean;
  pressToWantText?: string;
  uploadOrDragFilesHereText?: string;
  fileTypesAndMaxSizeText?: string;
  maxFileSizeMB?: number;
  availableMimeTypes?: string[];
  availableExtensionsTypes?: string[];
}

const DragAndDropUploadField = ({
  onDelete,
  onUpload,
  multiple = true,
  files,
  label,
  disabled = false,
  error,
  showError = false,
  pressToWantText = 'Paspauskite norėdami',
  uploadOrDragFilesHereText = 'įkelti arba įtempkite failus čia',
  fileTypesAndMaxSizeText = 'PDF, PNG, JPEG, JPG (maks. 20MB)',
  handleError = () => {},
  maxFileSizeMB = 20,
  availableMimeTypes = ['image/png', 'image/jpg', 'image/jpeg', 'application/pdf'],
  availableExtensionsTypes = ['.png', '.jpg', '.jpeg', '.pdf'],
}: FileFieldProps) => {
  const inputRef = useRef<any>(null);

  const [uploadLoading, setUploadLoading] = useState(false);

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

  const handleDelete = (e, index) => {
    e.stopPropagation();

    if (onDelete) {
      onDelete([...files.slice(0, index), ...files.slice(index + 1)]);
    }
  };

  return (
    <>
      <FieldWrapper error={error} showError={showError} label={label}>
        {!disabled && (
          <UploadFileContainer
            error={!!error}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
            onClick={onButtonClick}
          >
            <Input
              ref={inputRef}
              type="file"
              accept={availableExtensionsTypes.join(', ')}
              multiple={multiple}
              onChange={handleChange}
            />
            <TextRow>
              <BoldText>{pressToWantText}</BoldText>
              <Text>{uploadOrDragFilesHereText}</Text>
            </TextRow>
            <Text>{fileTypesAndMaxSizeText}</Text>
          </UploadFileContainer>
        )}
      </FieldWrapper>
      {uploadLoading && <LoaderComponent />}
      {map(files, (file, index) => {
        if (!file) return <></>;

        return (
          <FileContainer key={`${index}-file`}>
            <FileInnerContainer>
              <FileName>{file?.name}</FileName>
              <FileSize>{bytesToMb(file.size)}</FileSize>
            </FileInnerContainer>
            <IconContainer href={file?.url} target="_blank" download={file?.name}>
              <StyledIcon name="download" />
            </IconContainer>
            {!disabled && (
              <IconContainer
                onClick={(e) => {
                  handleDelete(e, index);
                }}
              >
                <StyledIcon name="remove" />
              </IconContainer>
            )}
          </FileContainer>
        );
      })}
    </>
  );
};

const IconContainer = styled.a`
  margin-top: auto;
  height: 40px;
  display: flex;
  @media ${device.mobileL} {
    margin-bottom: 0px;
    height: auto;
  }
`;

const StyledIcon = styled(Icon)`
  cursor: pointer;
  font-size: 1.8rem;
  color: #9aa4b2;
  margin: auto 0 auto 16px;
  @media ${device.mobileL} {
    margin: 8px 0 16px 0;
  }
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
  margin-top: 4px;
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

const TextRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

const UploadFileContainer = styled.div<{ error: boolean }>`
  cursor: pointer;
  background-color: #eeebe53d;
  border: 2px dashed ${({ theme, error }) => (error ? theme.colors.error : theme.colors.border)};
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 77px;
`;

export default DragAndDropUploadField;
