import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Context } from "../index";
import { Pagination } from "react-bootstrap";

const Pages = observer(() => {
    const { sample } = useContext(Context)
    const pageCount = Math.ceil(sample.totalCount / sample.limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }
    return (
        <Pagination className="mt-5" style={{ paddingLeft: 12 }}>
            {
                pages.map(page =>
                    <Pagination.Item

                        active={sample.page === page}
                        onClick={() => sample.setPage(page)}
                        key={page}>{page}</Pagination.Item>)
            }
        </Pagination >
    )
})

export default Pages