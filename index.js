const [_, __, _case] = process.argv

if(_case === 'fail') console.error('Failure case');
else console.log('Success case');

process.exit(_case === 'fail' ? 1 : 0);
