import React, { Component } from 'react'
import { connect } from 'react-redux'


class QuanLyGhe extends Component {
    renderBangGia = () => {
        let { gheDaDat } = this.props;
        return gheDaDat.map((item, index) => {
            return <tr key={index}>
                <td>{item.soGhe}</td>
                <td>{item.gia}</td>
                <td><button className="btn btn-danger" onClick={()=>{
                    this.props.dispatch({
                        type:'XOA_GHE',
                        soGhe: item.soGhe,
                        gia: item.gia,
                    })
                }}>Xóa</button></td>
            </tr>
        })
    }


    render() {
        return (
            <div>
                <h3 className="text-light">Danh sách ghế bạn chọn</h3>
                <table className="table" style={{ border: '1px solid black' }}>
                    <thead style={{ backgroundColor: 'grey' }}>
                        <tr>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Hủy</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderBangGia()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td>Tổng tiền:</td>
                            <td className="text-danger" style={{fontSize:25}}>{this.props.gheDaDat.reduce((tongTien, ghe, index, gheDaDat) => {
                                return tongTien += ghe.gia
                            }, 0)}</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        gheDaDat: state.BookingTicketReducer
    }
}

export default connect(mapStateToProps)(QuanLyGhe);