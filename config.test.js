const sum = require('./public/config/config');

test('Check if the contract address is correct', () => {
    expect(sum).toEqual(
       expect.objectContaining({
         CONTRACT_ADDRESS: '0x09855674e0632d12EC395682FeB4bF894370ab9f'
       })
     );
   });
   
   test('Check if max_supply is correct amount', () => {
    expect(sum).toEqual(
       expect.objectContaining({
         MAX_SUPPLY: 1000
       })
     );
   });
   
   test('Check if wei cost is correct', () => {
    expect(sum).toEqual(
       expect.objectContaining({
         WEI_COST: 10000000000000000
       })
     );
   });