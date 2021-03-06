import styled from 'styled-components/native';

export const Container = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingTop: 135,
    paddingBottom: 184
  },
  showsVerticalScrollIndicator: false
})`
  flex: 1;
  padding: 0 20px;
`;
