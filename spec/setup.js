const Adapter = await import('enzyme-adapter-react-16');
const Enzyme = await import('enzyme');

Enzyme.configure({ adapter: new Adapter() });
