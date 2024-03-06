function binary(decimal) {
  if (decimal === 0) return "0";

  let result = '';
  let value = 1;
  
  // Find the leftmost bit that is greater than decimal
  while (value <= decimal) {
    value <<= 1;
  }
  
  // Adjust value to the right
  value >>= 1;

  // Build the binary representation
  while (value > 0) {
    result += decimal & value ? '1' : '0';
    value >>= 1;
  }
  
  return result;
}