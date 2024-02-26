import { Pagination, ThemeProvider, createTheme } from '@mui/material';
import React from 'react'

const CustomPagination = ({setPage , pageCount = 10}) => {

    const handlePageChange = (page) => {
        setPage(page)
        window.scroll(0,0)
    }

    // const theme = createTheme({
    //     palette: {
    //         type : "dark"
    //     }
    // })

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
        color: 'white'
    }}>
      <Pagination
      onChange={(e) => handlePageChange(e.target.textContent)} 
      count={pageCount}
      color="primary"
      hideNextButton
      hidePrevButton/>
    </div>
  )
}

export default CustomPagination
