import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const ProductDetail = () => {
  let { id } = useParams()
  const [product, setProduct] = useState(null)
  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, [])
  return (
    <div>
      <Container>
        <Row>
          <Col className='product-img'>
            <img src={product?.img} />
          </Col>
          <Col>
            <div className='product-title'>{product?.title}</div>
            <div className='product-price'>₩ {product?.price}</div>
            <div className='product-choice'>{product?.choice == true ? "Conscious choice" : ""}</div>
            <Dropdown className='size-button'>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                사이즈 선택
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">S</Dropdown.Item>
                <Dropdown.Item href="#/action-2">M</Dropdown.Item>
                <Dropdown.Item href="#/action-3">L</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-grid gap-2">
              <Button variant="dark" size="md">
                추가
              </Button>
            </div>

          </Col>

        </Row>
      </Container>
    </div>
  )

}


export default ProductDetail
