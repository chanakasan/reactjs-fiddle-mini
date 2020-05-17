//============================================================================
/* start: Basic UI */
const ViewPort = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 20px;
  margin: 0;
  background: #222;
  padding-top: 60px;
`

const BrandWrapper = styled.div`
  padding: 5px 10px;
  font-size: 18px;
  font-weight: 800;
  color: red;
  background: #333;
  border: 1px solid #222;
  border-radius: 3px;

  position: fixed;
  top: 4px;
  left: 5px;
`
const Brand = () => <BrandWrapper>ReactJsFiddle</BrandWrapper>

const PortletWrapper = styled.div`
  padding: 0;
  border: 1px solid #888;
  border-radius: 4px;
  background: #fff;
  color: #000;

  & > div:first-child {
    margin: 0;
    padding: 10px 20px;
    font-size: 18px;
    background: #ccc;
    color: #444;
    border-bottom: 1px solid #eee;

  }

  & > div:last-child {
    padding: 20px;
  }
`
const Portlet = ({ heading, children, ...rest }) => (
  <PortletWrapper {...rest}>
    <div>{heading}</div>
    <div>
      {children}
    </div>
  </PortletWrapper>
)
/* end: Basic UI  */



//============================================================================
/* start: Fiddle */

const handleOnClick = (e) => {
  alert('Hello!');
}

const ExampleOne = () => (
  <>
    <button onClick={handleOnClick}>Say Hello!</button>
  </>
)

const App = () => (
  <ViewPort>
    <Brand />
    <Portlet heading="Just An Example" style={{width: '60vw'}}>
      <ExampleOne />
    </Portlet>
  </ViewPort>
)
/* end: Fiddle */



//============================================================================
/* Render App */
ReactDOM.render(<App />, document.getElementById('root'));
