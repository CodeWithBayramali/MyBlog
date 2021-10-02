import React from 'react'
import {Col,Row} from 'reactstrap'
import Category from './Category'

const PostList = () => {
    return (
        <div>
            <Row>
                <Col md="4">
                    <Category />
                </Col>
            </Row>
        </div>
    )
}

export default PostList
