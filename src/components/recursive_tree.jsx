import React, { Fragment } from 'react';
import { styled } from '@material-ui/core/styles';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Box from '@material-ui/core/Box';

const TreeItem = ({ label, children }) => {
  return (
    <div>
      <StyledTreeItem>
        {children.length > 0 && (
          <Box className="icon-container">
            <ChevronRightIcon />
          </Box>
        )}
        <StyledLabel
          className="label"
          style={{
            marginLeft: `${children.length === 0 ? '24px' : ''}`,
          }}
        >
          {label}
        </StyledLabel>
      </StyledTreeItem>
      <StyledTreeChildren>{children}</StyledTreeChildren>
    </div>
  );
};

const RecursiveTree = ({ listMeta }) => {
  const createTree = (branch) =>
    branch.branches && (
      <TreeItem id={branch.id} key={branch.id} label={branch.label}>
        {branch.branches.map((branch) => {
          return <Fragment key={branch.id}>{createTree(branch)}</Fragment>;
        })}
      </TreeItem>
    );

  return (
    <Box>
      {listMeta.map((branch, i) => (
        <Box key={i}>{createTree(branch)}</Box>
      ))}
    </Box>
  );
};

export default RecursiveTree;

const StyledLabel = styled(Box)({
  height: '24px',
  '&:hover': {
    cursor: 'pointer',
  },
});

const StyledTreeItem = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
});

const StyledTreeChildren = styled(Box)({
  paddingLeft: '10px',
});
