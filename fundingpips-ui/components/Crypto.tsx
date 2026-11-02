const COINS: [string, string][] = [['tether', 'TetherUS'], ['bitcoin', 'Bitcoin'], ['ethereum', 'Ethereum'], ['xrp', 'XRP'], ['bnb', 'BNB'], ['usdc', 'USDC'], ['solana', 'Solana'], ['litecoin', 'Litecoin'], ['dogecoin', 'Dogecoin'], ['tron', 'TRON'], ['shiba-inu', 'SHIBA INU'], ['chainlink', 'ChainLink'], ['polygon', 'Polygon'], ['hedera', 'Hedera'], ['stellar', 'Stellar'], ['bitcoin-cash', 'Bitcoin Cash'], ['pepe', 'Pepe'], ['arbitrum', 'Arbitrum'], ['polkadot', 'Polkadot'], ['avalanche', 'Avalanche'], ['internet-computer', 'Internet Computer'], ['compound', 'Compound'], ['terra-classic', 'Terra Classic'], ['gala', 'Gala'], ['ondo', 'Ondo'], ['1inch', '1inch'], ['singularitynet', 'SingularityNET'], ['vechain', 'VeChain'], ['arkham', 'Arkham'], ['worldcoin', 'Worldcoin'], ['verge', 'Verge'], ['euro', 'Euro'], ['trueusd', 'TrueUSD'], ['brazilian-real', 'Brazilian Real'], ['conflux', 'Conflux'], ['amp', 'AMP'], ['aptos', 'Aptos'], ['algorand', 'Algorand'], ['aster', 'Aster'], ['cosmos', 'Cosmos'], ['adventure-gold', 'Adventure Gold'], ['auction', 'Auction']];

/** Lưới logo tiền tệ, không khung. Chưa có tài liệu xác nhận danh sách tiền tệ thanh toán nên tiêu đề để trung tính. */
export function CryptoGrid() {
  return (
    <section className="py-16 lg:py-20">
      <div className="wrap">
        <div className="flex items-center justify-center gap-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/stock/banknotes.jpg" alt="" loading="lazy" className="hidden md:block w-40 h-24 object-cover rounded-2xl -rotate-3 shadow-xl" />
          <h2 className="h2 text-center">Supported currencies</h2>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/stock/bitcoin.jpg" alt="" loading="lazy" className="hidden md:block w-40 h-24 object-cover rounded-2xl rotate-3 shadow-xl" />
        </div>
        <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-x-4 gap-y-8 mt-12">
          {COINS.map(([slug, name]) => (
            <li key={slug} className="flex flex-col items-center gap-3 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/crypto/${slug}.png`} alt={name} loading="lazy" className="w-14 h-14 object-contain transition hover:scale-110" />
              <span className="text-xs font-semibold text-muted">{name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
