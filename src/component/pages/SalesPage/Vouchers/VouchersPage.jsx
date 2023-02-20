import React from 'react';
import './vouchers.scss';

const VouchersPage = () => {
    return (
        <div className='vouchers-container'>
            <div className='detail-container'>
                <div className='content-container'>
                    <div className='content-detail'>
                        <div className='content-title'>Vouchers sold</div>
                        <span className='content-summary'>
                            View, filter and export vouchers purchased by your clients.
                            <a> Learn more</a>
                        </span>
                    </div>
                    <select className='select-action'>
                        <option>PDF</option>
                        <option>Excel</option>
                        <option>CSV</option>
                    </select>
                </div>
                <div className='content-setting'>
                    <div className='search-container'>
                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                        <input type="text" placeholder='Search by Reference or Client' />
                    </div>
                    <div className='filter-group'>
                        <span>Filters</span>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 9.375a.75.75 0 0 1 .75.75V20.25a.75.75 0 0 1-1.5 0V10.125a.75.75 0 0 1 .75-.75ZM12 3a.75.75 0 0 1 .75.75v2.625a.75.75 0 0 1-1.5 0V3.75A.75.75 0 0 1 12 3Z"></path><path d="M12 7.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM9.375 8.25a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM18.75 16.75c.414.125.75.46.75.875v2.625a.75.75 0 0 1-1.5 0v-2.625a.75.75 0 0 1 .75-.75ZM18.75 3a.75.75 0 0 1 .75.75v10.125a.75.75 0 0 1-1.5 0V3.75a.75.75 0 0 1 .75-.75Z"></path><path d="M18.75 14.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm-2.625 1.125a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0ZM5.25 13.875a.75.75 0 0 1 .75.75v5.625a.75.75 0 0 1-1.5 0v-5.625a.75.75 0 0 1 .75-.75ZM5.25 3a.75.75 0 0 1 .75.75v7.125a.75.75 0 1 1-1.5 0V3.75A.75.75 0 0 1 5.25 3Z"></path><path d="M5.25 11.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25ZM2.625 12.75a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z"></path></svg>
                    </div>
                </div>
                <div className='content-details'>
                    <div className='table-container'>
                        <table>
                            <thead>
                                <tr className='table-header'>
                                    <th className='font-left' style={{ width: '120px' }}>Issue date</th>
                                    <th className='font-left' style={{ width: '150px' }}>Expiry date</th>
                                    <th className='font-left' style={{ width: '150px' }}>Sale #</th>
                                    <th className='font-left' style={{ width: '180px' }}>Client</th>
                                    <th className='font-left' style={{ width: '180px' }}>Type</th>
                                    <th className='font-left' style={{ width: '180px' }}>Status</th>
                                    <th className='font-left' style={{ width: '120px' }}>Code</th>
                                    <th className='font-right' style={{ width: '180px' }}>Total</th>
                                    <th className='font-right' style={{ width: '100px' }}>Redeemed</th>
                                    <th className='font-right' style={{ width: '120px' }}>Remaining</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='font-left'>14 Feb 2023, 03:27</td>
                                    <td className='font-left'>14 Aug 2023</td>
                                    <td className='font-left ref-name'>1</td>
                                    <td className='font-left'>Walk-In</td>
                                    <td className='font-left ref-name'>Service Voucher</td>
                                    <td className='font-left'>
                                        <span className='badge-success badge'>VALID</span>
                                    </td>
                                    <td className='font-left'>VRCTRTJB</td>
                                    <td className='font-right'>$123.00</td>
                                    <td className='font-right'>$0.00</td>
                                    <td className='font-right'>$123.00</td>
                                </tr>
                                <tr>
                                    <td className='font-left'>14 Feb 2023, 03:27</td>
                                    <td className='font-left'>14 Aug 2023</td>
                                    <td className='font-left ref-name'>1</td>
                                    <td className='font-left'>Walk-In</td>
                                    <td className='font-left ref-name'>Service Voucher</td>
                                    <td className='font-left'>
                                        <span className='badge-success badge'>VALID</span>
                                    </td>
                                    <td className='font-left'>VYYJSKSH</td>
                                    <td className='font-right'>$123.00</td>
                                    <td className='font-right'>$0.00</td>
                                    <td className='font-right'>$123.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VouchersPage;