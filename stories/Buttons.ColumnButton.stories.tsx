import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

import ColumnButton from '../src/components/ColumnButton';
import StoryWrapper from '../src/components/common/StoryWrapper';

const meta: Meta<typeof ColumnButton> = {
  component: ColumnButton,
  title: 'Design system/Buttons/ColumnButton',
};

const columns = {
  name: { label: 'Rūšis', show: true },
  amount: { label: 'Kiekis', show: true },
};

export default meta;
type Story = StoryObj<typeof ColumnButton>;

export const ButtonStory: Story = {
  name: 'ColumnButton',
  render: () => {
    const [selectedColumns, setSelectedColumns] = useState(columns);

    return (
      <StoryWrapper>
        <ColumnButton
          columns={selectedColumns}
          onToggle={(columns) => setSelectedColumns(columns)}
          texts={{
            atLeastOneColumn: 'Turi būti pasirinktas bent vienas stulpelis',
            columns: 'Stulpeliai',
          }}
        />
      </StoryWrapper>
    );
  },
};
