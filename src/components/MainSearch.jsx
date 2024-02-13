import { useState } from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import Job from "./Job";
import { Link } from "react-router-dom";
import { getAllCompanies, showSpinner } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.fetch.available.data);
  const isLoading = useSelector((state) => state.fetch.isLoading);
  const isSpinner = useSelector((state) => state.fetch.isSpinner);

  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getAllCompanies(baseEndpoint, query));
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3 d-flex justify-content-between">
          <h1 className="display-1">Remote Jobs Search</h1>
          <Link to="/favourites" className="text-decoration-none">
            Go to favuorites
          </Link>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control
              type="search"
              value={query}
              onChange={handleChange}
              placeholder="type and press Enter"
            />
          </Form>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {isSpinner && (
            <div className="d-flex justify-content-center align-items-center my-5">
              <Spinner animation="border" variant="primary"></Spinner>
            </div>
          )}
          {!isLoading &&
            jobs.map((jobData) => <Job key={jobData._id} data={jobData} />)}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
