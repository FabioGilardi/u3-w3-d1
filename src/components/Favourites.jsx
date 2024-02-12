import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Favourites = () => {
  const dispatch = useDispatch();

  const companyNames = useSelector((state) => {
    return state.company.favourites;
  });

  return (
    <Container>
      <Row>
        <Col sm={10} md={8} lg={6} className="mx-auto">
          <h1 className="text-center">Your Favourites List:</h1>
          <ul className="list-unstyled">
            {companyNames.map((company, i) => {
              return (
                <li className="mb-2" key={i}>
                  <Link to={"/" + company}>{company}</Link>
                  <Button
                    variant="danger"
                    className="btn-sm ms-3"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVUORITES",
                        payload: i,
                      });
                    }}
                  >
                    <i className="bi bi-trash"></i>
                  </Button>
                </li>
              );
            })}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
