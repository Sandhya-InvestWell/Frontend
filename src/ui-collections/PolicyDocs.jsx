import React from 'react'
import Navbar from './Navbar.jsx'
// import pdf from "../media/Pdf/sample.pdf"
import { useLocation } from 'react-router-dom'
import axios from "axios"

const PolicyDocs = () => {
    const location = useLocation();
    const data = location.state.props;
    
    const openPdf = async (fileName) => {
        const res = await axios.get("http://localhost:8000/user/getPolicyData", { params: { fileName } });
        const pdf = res.data.pdfPath
        console.log(pdf);
        window.open(pdf, "_blank")
    }
  return (
    <>
        <Navbar/>
        <table className='policyTable'>
            <caption className='policyData'>Policy Docs</caption>
            <thead>
                <tr>
                    <th className='policyData'>S.No</th>
                    <th className='policyData'>Policy Name</th>
                    <th className='policyData'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map(policy => {
                        return (
                            <tr>
                                <td className='policyData'>{policy.index}</td>
                                <td className='policyData'>{policy.fileName.slice(0, -4)}</td>
                                <td className='policyData'><button onClick={ () => { openPdf(policy.fileName) }}> PDF </button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </>
  )
}

export default PolicyDocs