const borderSize = 1

export const appleButtonList = [{
  color: 'bg-mbti-mac-red',
  borderSize,
}, {
  color: 'bg-mbti-deep-yellow',
  borderSize,
}, {
  color: 'bg-mbti-deep-mint',
  borderSize,
}]

export const sleep = (ms: number): Promise<void> => {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
};
