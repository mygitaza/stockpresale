import React, { useEffect } from 'react'
import './Viewstock.css'
import Stockheader from '../../../components/Stockheader/Stockheader'
import { useSelector } from 'react-redux'
import { useAddStockMutation, useGetUserStocksQuery } from '../../../redux/api/stockApi'

const Viewstock = () => {
    const user = useSelector((state) => state.auth.user);
    const total = useSelector((state)=> state.stock.total);

    const {
        data: stocks = [],     
        refetch,
      } = useGetUserStocksQuery(user?.id, {
        skip: !user?.id,
      });

    const [addStock, {isLoading, error}] = useAddStockMutation();

    useEffect(() => {
        // Save stock units from Redux to backend only once
        const saveStock = async () => {
          if (user?.id && total > 0) {
            try {
              await addStock({ userId: user.id, units: total }).unwrap();
              refetch(); // Refresh stock list after saving
            } catch (err) {
              console.error('Error saving stock:', err);
            }
          }
        };
    
        saveStock();
      }, [user?.id, total, addStock, refetch]);

    // Calculate total units by summing all user's stock units
    const totalUnits = stocks.reduce((acc, stock) => acc + (Number(stock.units) || 0), 0);

  return (
    <div className='viewstock'>
        <Stockheader title ="View Stock MODE Inc"/>
        <div className="viewstock-wrapper">
            <div className='viewstock-content-header'>
                <p>Stock</p>
                <p>Units</p>
                <p>Acquired</p>
                <p>Payment</p>
            </div>
            {stocks.length > 0 ? (
  stocks.map((stock) => (
    <div key={stock._id} className='viewstock-content-bottom'>
      <p>MODE Inc</p>
      <p className='viewstock-units'>{Number(stock.units).toFixed(2)}</p>
      <p>{isLoading ? 'Saving...' : 'Successful'}</p>
      <p className='payment-status'>{stock.status}</p>
    </div>
  ))
) : (
  <p>No stock available</p>
)}
            
            {error && <p className="error-text">Failed to save stock.</p>}

        </div>
        <div>
            <p>Total Stock Units: <span className='total-units'>{totalUnits.toFixed(2)}</span></p>
        </div>
    </div>
  )
}

export default Viewstock