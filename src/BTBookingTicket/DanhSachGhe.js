import React, { Component } from 'react'
import { connect } from 'react-redux'



class DanhSachGhe extends Component {
    
    renderSeat = () => {
        let { arrSeat } = this.props;
        return arrSeat.map((item, index) => {
            let seatSpace = [];
            for (let i = 0; i <= arrSeat.length + 1; i++) {
                seatSpace.push(
                    <td><button className="ghe" onClick={() => {
                        this.props.dispatch({
                            type: 'DAT_GHE',
                            soGhe: item.danhSachGhe[i].soGhe,
                            gia: item.danhSachGhe[i].gia,
                        })
                    }}>{item.danhSachGhe[i].soGhe}</button></td>
                );
            }
            return (<tr>
                {seatSpace}
            </tr>);
        })

    }


    render() {
        return (
            <div>
                <h2 style={{ color: 'orange' }}>ĐẶT VÉ XEM PHIM</h2>
                <h4 className="text-white">Màn hình</h4>
                <div className="screen"></div>
                <table className="table">
                    <thead className="bg-dark" style={{ color: 'yellow', fontSize: 20 }}>
                        <tr>
                            <th>1</th>
                            <th>2</th>
                            <th>3</th>
                            <th>4</th>
                            <th>5</th>
                            <th>6</th>
                            <th>7</th>
                            <th>8</th>
                            <th>9</th>
                            <th>10</th>
                            <th>11</th>
                            <th>12</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSeat()}
                    </tbody>
                </table>
            </div>
        )
    }
}


export default connect()(DanhSachGhe);