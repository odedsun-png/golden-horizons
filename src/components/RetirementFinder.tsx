"use client";
import { useState } from "react";
import Link from "next/link";

type Country = {
  id: string; flag: string; name: string; region: string;
  coupleMin: number; coupleMax: number; singleMin: number; singleMax: number;
  lifestyle: string[]; english: boolean; taxFree: boolean; easyVisa: boolean; beach: boolean;
  acceptsSS: boolean; acceptsSavings: boolean; acceptsOther: boolean;
  desc: string; img: string;
};

type Answers = {
  who: string; budget: string; income: string; region: string; lifestyle: string;
  english: boolean; taxFree: boolean; easyVisa: boolean;
};

const all26: Country[] = [
  { id:"portugal", flag:"🇵🇹", name:"Portugal", region:"europe", coupleMin:2500, coupleMax:4000, singleMin:1500, singleMax:2500, lifestyle:["city","countryside"], english:true, taxFree:false, easyVisa:true, beach:false, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"#1 International Living 2026. EU citizenship, NHR 2.0 flat tax, world-class SNS healthcare.", img:"https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=600&q=80" },
  { id:"mexico", flag:"🇲🇽", name:"Mexico", region:"americas", coupleMin:1500, coupleMax:3000, singleMin:1000, singleMax:1800, lifestyle:["city","beach","countryside"], english:true, taxFree:true, easyVisa:false, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"Closest retirement destination to the US. World's largest American expat community at Lake Chapala.", img:"https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=600&q=80" },
  { id:"costa-rica", flag:"🇨🇷", name:"Costa Rica", region:"americas", coupleMin:2000, coupleMax:3500, singleMin:1200, singleMax:2000, lifestyle:["beach","countryside"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"Pura Vida lifestyle, stable democracy, excellent CAJA healthcare, eternal spring climate.", img:"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80" },
  { id:"spain", flag:"🇪🇸", name:"Spain", region:"europe", coupleMin:2500, coupleMax:4500, singleMin:1500, singleMax:2500, lifestyle:["city","beach"], english:false, taxFree:false, easyVisa:false, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"SNS healthcare ranked #7 globally. Canary Islands offer Europe's best year-round climate.", img:"https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=600&q=80" },
  { id:"panama", flag:"🇵🇦", name:"Panama", region:"americas", coupleMin:2500, coupleMax:4500, singleMin:1500, singleMax:2500, lifestyle:["city","beach"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"World's best retirement visa. USD economy, zero tax on all foreign income, immediate PR.", img:"https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80" },
  { id:"thailand", flag:"🇹🇭", name:"Thailand", region:"asia", coupleMin:1500, coupleMax:3000, singleMin:900, singleMax:1800, lifestyle:["city","beach"], english:true, taxFree:false, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:false, desc:"Bumrungrad Hospital ranked top 10 globally. Chiang Mai is the #1 expat city in the world.", img:"https://images.unsplash.com/photo-1528181304800-259b08848526?w=600&q=80" },
  { id:"ecuador", flag:"🇪🇨", name:"Ecuador", region:"americas", coupleMin:1500, coupleMax:2500, singleMin:900, singleMax:1400, lifestyle:["city","countryside"], english:false, taxFree:true, easyVisa:true, beach:false, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"USD official currency, zero foreign income tax, Cuenca's perfect spring climate year-round.", img:"https://images.unsplash.com/photo-1566438480900-0609be27a4be?w=600&q=80" },
  { id:"malaysia", flag:"🇲🇾", name:"Malaysia", region:"asia", coupleMin:1500, coupleMax:2800, singleMin:900, singleMax:1600, lifestyle:["city","beach"], english:true, taxFree:true, easyVisa:false, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:false, desc:"Most English-friendly Asian destination. Penang voted #1 expat city globally multiple times.", img:"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=600&q=80" },
  { id:"greece", flag:"🇬🇷", name:"Greece", region:"europe", coupleMin:2000, coupleMax:3500, singleMin:1200, singleMax:2000, lifestyle:["city","beach"], english:true, taxFree:false, easyVisa:false, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"7% flat tax on all foreign pensions for 10 years. 300 sunny days and iconic island lifestyle.", img:"https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80" },
  { id:"colombia", flag:"🇨🇴", name:"Colombia", region:"americas", coupleMin:1500, coupleMax:2800, singleMin:900, singleMax:1600, lifestyle:["city","countryside"], english:false, taxFree:true, easyVisa:true, beach:false, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"Lowest pension visa in Latin America: $750/month. Medellín eternal spring 70–80°F year-round.", img:"https://images.unsplash.com/photo-1518638150340-f706e86654de?w=600&q=80" },
  { id:"vietnam", flag:"🇻🇳", name:"Vietnam", region:"asia", coupleMin:1000, coupleMax:1800, singleMin:700, singleMax:1200, lifestyle:["city","beach"], english:false, taxFree:true, easyVisa:false, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:true, desc:"Southeast Asia's best value. World-class food culture and beautiful coastline at minimal cost.", img:"https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80" },
  { id:"italy", flag:"🇮🇹", name:"Italy", region:"europe", coupleMin:2500, coupleMax:5000, singleMin:1400, singleMax:2800, lifestyle:["city","countryside","beach"], english:false, taxFree:false, easyVisa:false, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"7% flat tax in southern villages. Free SSN healthcare. World's greatest food and wine culture.", img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=600&q=80" },
  { id:"france", flag:"🇫🇷", name:"France", region:"europe", coupleMin:3000, coupleMax:6000, singleMin:1800, singleMax:3500, lifestyle:["city","countryside"], english:false, taxFree:false, easyVisa:false, beach:false, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"WHO-ranked #1 healthcare globally. Unmatched quality of life via food, culture, and rail.", img:"https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80" },
  { id:"new-zealand", flag:"🇳🇿", name:"New Zealand", region:"other", coupleMin:3500, coupleMax:6000, singleMin:2000, singleMax:3500, lifestyle:["city","countryside","beach"], english:true, taxFree:false, easyVisa:false, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:false, desc:"#2 safest country on Earth. English-speaking, spectacular nature, world-class infrastructure.", img:"https://images.unsplash.com/photo-1507699622108-4be3abd695ad?w=600&q=80" },
  { id:"panama-azores", flag:"🇵🇹", name:"Portugal — Azores", region:"europe", coupleMin:1800, coupleMax:2800, singleMin:1100, singleMax:1700, lifestyle:["countryside","beach"], english:true, taxFree:false, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:true, desc:"30–40% cheaper than mainland Portugal with identical D7 visa and NHR 2.0 tax benefits.", img:"https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?w=600&q=80" },
  { id:"malta", flag:"🇲🇹", name:"Malta", region:"europe", coupleMin:2500, coupleMax:4000, singleMin:1400, singleMax:2200, lifestyle:["city","beach"], english:true, taxFree:false, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:false, desc:"Only English-speaking EU country. 15% flat tax, 300 sunny days, EU citizenship pathway.", img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80" },
  { id:"belize", flag:"🇧🇿", name:"Belize", region:"americas", coupleMin:1500, coupleMax:2500, singleMin:900, singleMax:1500, lifestyle:["beach","countryside"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"Only English-speaking country in Central America. Zero tax on foreign income, world-class diving.", img:"https://images.unsplash.com/photo-1534850336045-c6c6d287f89e?w=600&q=80" },
  { id:"argentina", flag:"🇦🇷", name:"Argentina", region:"americas", coupleMin:1000, coupleMax:2000, singleMin:700, singleMax:1200, lifestyle:["city","countryside"], english:false, taxFree:false, easyVisa:false, beach:false, acceptsSS:false, acceptsSavings:true, acceptsOther:true, desc:"Paris of South America. Extraordinary USD purchasing power, world-class steak and wine culture.", img:"https://images.unsplash.com/photo-1612294037637-ec328d0e075e?w=600&q=80" },
  { id:"bolivia", flag:"🇧🇴", name:"Bolivia", region:"americas", coupleMin:800, coupleMax:1400, singleMin:600, singleMax:900, lifestyle:["city","countryside"], english:false, taxFree:true, easyVisa:false, beach:false, acceptsSS:false, acceptsSavings:true, acceptsOther:false, desc:"South America's most affordable. Sucre's perfect 63°F year-round climate, UNESCO Heritage.", img:"https://images.unsplash.com/photo-1571566882372-1598d88abd90?w=600&q=80" },
  { id:"cambodia", flag:"🇰🇭", name:"Cambodia", region:"asia", coupleMin:1000, coupleMax:1800, singleMin:700, singleMax:1100, lifestyle:["city","beach"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:true, desc:"Easiest visa in Asia at $290/year, no income requirement. USD economy and near-zero costs.", img:"https://images.unsplash.com/photo-1568733126608-7cd9b0a753c6?w=600&q=80" },
  { id:"northern-cyprus", flag:"🇨🇾", name:"Northern Cyprus", region:"europe", coupleMin:1200, coupleMax:2200, singleMin:800, singleMax:1400, lifestyle:["city","beach"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:false, desc:"Mediterranean lifestyle at budget prices. 300 sunny days, English spoken, very low taxes.", img:"https://images.unsplash.com/photo-1560179406-1c6c60e0dc76?w=600&q=80" },
  { id:"philippines", flag:"🇵🇭", name:"Philippines", region:"asia", coupleMin:1200, coupleMax:2500, singleMin:800, singleMax:1500, lifestyle:["city","beach"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:false, desc:"English-speaking Asia with no tax on foreign pensions. Deposit-only SRRV visa, US tax treaty.", img:"https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=600&q=80" },
  { id:"paraguay", flag:"🇵🇾", name:"Paraguay", region:"americas", coupleMin:1200, coupleMax:2000, singleMin:800, singleMax:1300, lifestyle:["city","countryside"], english:false, taxFree:true, easyVisa:true, beach:false, acceptsSS:true, acceptsSavings:false, acceptsOther:false, desc:"Easiest residency in South America. Territorial tax, USD-linked economy, very low cost.", img:"https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=600&q=80" },
  { id:"indonesia", flag:"🇮🇩", name:"Indonesia", region:"asia", coupleMin:1200, coupleMax:2200, singleMin:800, singleMax:1400, lifestyle:["beach","countryside"], english:true, taxFree:true, easyVisa:true, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:false, desc:"Dedicated retirement KITAS visa. Bali's world-famous lifestyle across 17,000 islands.", img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80" },
  { id:"albania", flag:"🇦🇱", name:"Albania", region:"europe", coupleMin:930, coupleMax:1830, singleMin:570, singleMax:1150, lifestyle:["city","beach"], english:true, taxFree:false, easyVisa:true, beach:true, acceptsSS:true, acceptsSavings:true, acceptsOther:false, desc:"Cheapest country in Europe. 1-year visa-free for Americans. Albanian Riviera rivals Greece.", img:"https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?w=600&q=80" },
  { id:"montenegro", flag:"🇲🇪", name:"Montenegro", region:"europe", coupleMin:1410, coupleMax:2640, singleMin:880, singleMax:1660, lifestyle:["city","beach"], english:true, taxFree:false, easyVisa:false, beach:true, acceptsSS:false, acceptsSavings:true, acceptsOther:false, desc:"9% flat tax — Europe's lowest. Stunning Bay of Kotor and Adriatic coastline.", img:"https://images.unsplash.com/photo-1555990538-c01c6462f8e2?w=600&q=80" },
];

const STEPS = [
  { id:"who", label:"Who's retiring?", icon:"👤" },
  { id:"budget", label:"Monthly budget", icon:"💰" },
  { id:"income", label:"Proof of income", icon:"📄" },
  { id:"region", label:"Preferred region", icon:"🌍" },
  { id:"lifestyle", label:"Lifestyle vibe", icon:"🌅" },
  { id:"extras", label:"Must-haves", icon:"✅" },
];

const gold = "#d4a017";
const dark = "#1f2326";

type Props = {
  /** When true, skip the collapsed "Start" card and render the quiz immediately */
  defaultOpen?: boolean;
};

export default function RetirementFinder({ defaultOpen = false }: Props) {
  const [open, setOpen] = useState(defaultOpen);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({
    who:"", budget:"", income:"", region:"", lifestyle:"",
    english:false, taxFree:false, easyVisa:false
  });
  const [results, setResults] = useState<(Country & { score: number })[] | null>(null);

  function setA(key: keyof Answers, val: string | boolean) {
    setAnswers(a => ({...a, [key]: val}));
  }
  function toggle(key: keyof Answers) {
    setAnswers(a => ({...a, [key]: !a[key]}));
  }

  function findMatches() {
    const { who, budget, income, region, lifestyle, english, taxFree, easyVisa } = answers;
    const isCouple = who === "couple";
    const [bMin, bMax] = budget === "under1500" ? [0,1500] : budget === "1500_2500" ? [1500,2500] : budget === "2500_4000" ? [2500,4000] : [4000,99999];

    const pool = all26.filter(c => {
      if (region !== "any" && c.region !== region) return false;
      if (income === "ss" && !c.acceptsSS) return false;
      if (income === "savings" && !c.acceptsSavings) return false;
      if (income === "other" && !c.acceptsOther) return false;
      return true;
    });

    const scored = pool.map(c => {
      let score = 0;
      const cMin = isCouple ? c.coupleMin : c.singleMin;
      const cMax = isCouple ? c.coupleMax : c.singleMax;
      if (cMin <= bMax && cMax >= bMin) score += 3;
      if (lifestyle === "beach" && c.beach) score += 2;
      else if (lifestyle === "city" && c.lifestyle.includes("city")) score += 2;
      else if (lifestyle === "countryside" && c.lifestyle.includes("countryside")) score += 2;
      else if (lifestyle === "any") score += 1;
      if (english) { if (c.english) score += 5; else score -= 3; }
      if (taxFree && c.taxFree) score += 2;
      if (easyVisa && c.easyVisa) score += 2;
      return { ...c, score };
    }).sort((a, b) => b.score - a.score);

    setResults(scored.slice(0, 3));
  }

  function next() {
    if (step < STEPS.length - 1) setStep(s => s + 1);
    else findMatches();
  }
  function back() { if (step > 0) setStep(s => s - 1); }
  function restart() {
    setAnswers({ who:"", budget:"", income:"", region:"", lifestyle:"", english:false, taxFree:false, easyVisa:false });
    setStep(0);
    setResults(null);
  }

  const canNext =
    (step === 0 && answers.who) ||
    (step === 1 && answers.budget) ||
    (step === 2 && answers.income) ||
    (step === 3 && answers.region) ||
    (step === 4 && answers.lifestyle) ||
    step === 5;

  return (
    <div style={{maxWidth:680,margin:"0 auto"}}>
      {/* Collapsed start card — only shown when not embedded (defaultOpen=false) */}
      {!open && (
        <button onClick={() => setOpen(true)} style={{width:"100%",padding:"20px 28px",background:"#fff",border:`2px solid ${gold}`,borderRadius:14,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"space-between",boxShadow:"0 4px 20px rgba(0,0,0,0.08)"}}>
          <div style={{display:"flex",alignItems:"center",gap:14}}>
            <span style={{fontSize:28}}>🎯</span>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:16,fontWeight:700,color:dark}}>Find My Perfect Retirement Destination</div>
              <div style={{fontSize:12,color:"#888",marginTop:2}}>Answer 6 quick questions — we match you to the best countries</div>
            </div>
          </div>
          <div style={{background:gold,color:"#fff",borderRadius:8,padding:"8px 16px",fontSize:13,fontWeight:700,flexShrink:0}}>Start →</div>
        </button>
      )}

      {open && (
        <div style={{background:"#fff",borderRadius:16,padding:"32px 28px",boxShadow:"0 4px 32px rgba(0,0,0,0.10)"}}>

          {results && (
            <>
              <div style={{textAlign:"center",marginBottom:24}}>
                <div style={{fontSize:32,marginBottom:8}}>🎯</div>
                <div style={{fontSize:20,fontWeight:700,color:"#111",marginBottom:4}}>Your top retirement matches</div>
                <div style={{fontSize:13,color:"#888"}}>Click any country to see its full profile</div>
              </div>
              {results.length === 0 ? (
                <div style={{textAlign:"center",padding:"32px 0",color:"#888"}}>
                  <div style={{fontSize:32,marginBottom:12}}>🔍</div>
                  <div style={{fontSize:15,fontWeight:600,marginBottom:8}}>No exact matches found</div>
                  <div style={{fontSize:13}}>Try &quot;Open to anywhere&quot; or a different income type.</div>
                </div>
              ) : (
                <div style={{display:"flex",flexDirection:"column",gap:14,marginBottom:24}}>
                  {results.map((c, i) => (
                    <Link key={c.id} href={`/destinations/${c.id}`} style={{display:"flex",background:"#f9f9f9",borderRadius:12,overflow:"hidden",border:"1px solid #eee",textDecoration:"none"}}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={c.img} alt={c.name} style={{width:110,height:95,objectFit:"cover",flexShrink:0}} />
                      <div style={{padding:"12px 14px",flex:1}}>
                        <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:5}}>
                          <span style={{background:gold,color:"#fff",borderRadius:20,fontSize:11,fontWeight:700,padding:"2px 8px"}}>#{i+1} Match</span>
                          <span style={{fontSize:18}}>{c.flag}</span>
                          <span style={{fontSize:15,fontWeight:700,color:"#111"}}>{c.name}</span>
                        </div>
                        <div style={{fontSize:12,color:"#555",lineHeight:1.55,marginBottom:5}}>{c.desc}</div>
                        <div style={{fontSize:11,color:"#aaa",fontStyle:"italic"}}>
                          {answers.who === "couple"
                            ? `$${c.coupleMin.toLocaleString()}–$${c.coupleMax.toLocaleString()}/mo couple`
                            : `$${c.singleMin.toLocaleString()}–$${c.singleMax.toLocaleString()}/mo single`}
                        </div>
                      </div>
                      <div style={{display:"flex",alignItems:"center",padding:"0 16px",color:gold,fontSize:18,flexShrink:0}}>→</div>
                    </Link>
                  ))}
                </div>
              )}
              <div style={{display:"flex",gap:10}}>
                <button onClick={restart} style={{flex:1,padding:"11px",background:"#f3f3f3",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",color:"#444"}}>← Start Over</button>
                <Link href="/destinations" style={{flex:1,padding:"11px",background:dark,color:"#fff",borderRadius:8,fontSize:13,fontWeight:600,textAlign:"center",textDecoration:"none",display:"flex",alignItems:"center",justifyContent:"center"}}>See All 26 Countries →</Link>
              </div>
              {/* Only show close button when not embedded */}
              {!defaultOpen && (
                <button onClick={() => { setOpen(false); restart(); }} style={{width:"100%",marginTop:10,padding:"8px",background:"none",border:"none",color:"#bbb",fontSize:12,cursor:"pointer"}}>✕ Close</button>
              )}
            </>
          )}

          {!results && (
            <>
              <div style={{display:"flex",gap:5,marginBottom:8}}>
                {STEPS.map((s, i) => (
                  <div key={s.id} style={{flex:1,height:4,borderRadius:4,background:i<=step?gold:"#eee",transition:"background 0.3s"}} />
                ))}
              </div>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:22}}>
                <span style={{fontSize:11,color:"#bbb"}}>Step {step+1} of {STEPS.length}</span>
                {/* Only show ✕ close when not embedded in hero */}
                {!defaultOpen && (
                  <button onClick={() => { setOpen(false); restart(); }} style={{background:"none",border:"none",color:"#bbb",fontSize:18,cursor:"pointer",lineHeight:1}}>✕</button>
                )}
              </div>
              <div style={{textAlign:"center",marginBottom:22}}>
                <div style={{fontSize:28,marginBottom:6}}>{STEPS[step].icon}</div>
                <div style={{fontSize:18,fontWeight:700,color:"#111"}}>{STEPS[step].label}</div>
              </div>

              {step === 0 && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  {([["single","Solo retiree","👤"],["couple","Retiring as a couple","👫"]] as const).map(([v,label,icon]) => (
                    <button key={v} onClick={() => setA("who", v)} style={{padding:"22px 12px",borderRadius:12,border:`2px solid ${answers.who===v?gold:"#e5e5e5"}`,background:answers.who===v?"#fffbf0":"#fff",cursor:"pointer",textAlign:"center",transition:"all 0.15s"}}>
                      <div style={{fontSize:30,marginBottom:8}}>{icon}</div>
                      <div style={{fontSize:13,fontWeight:600,color:"#222"}}>{label}</div>
                    </button>
                  ))}
                </div>
              )}

              {step === 1 && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  {([["under1500","Under $1,500","🟢 Very budget"],["1500_2500","$1,500–$2,500","🟡 Comfortable"],["2500_4000","$2,500–$4,000","🟠 Premium"],["4000plus","$4,000+","🔵 Luxury"]] as const).map(([v,label,sub]) => (
                    <button key={v} onClick={() => setA("budget", v)} style={{padding:"18px 12px",borderRadius:12,border:`2px solid ${answers.budget===v?gold:"#e5e5e5"}`,background:answers.budget===v?"#fffbf0":"#fff",cursor:"pointer",textAlign:"center",transition:"all 0.15s"}}>
                      <div style={{fontSize:13,fontWeight:700,color:"#222",marginBottom:4}}>{label}</div>
                      <div style={{fontSize:11,color:"#888"}}>{sub}</div>
                    </button>
                  ))}
                </div>
              )}

              {step === 2 && (
                <div style={{display:"flex",flexDirection:"column",gap:12}}>
                  {([
                    ["ss","🏛️ Social Security","Monthly SS check — accepted by most retirement visas"],
                    ["savings","🏦 Savings / Investments","Bank statements or investment portfolio"],
                    ["other","💼 Pension / Rental / Business","Private pension, rental income, annuity, or business income"]
                  ] as const).map(([v,label,desc]) => (
                    <button key={v} onClick={() => setA("income", v)} style={{display:"flex",alignItems:"flex-start",gap:14,padding:"16px",borderRadius:12,border:`2px solid ${answers.income===v?gold:"#e5e5e5"}`,background:answers.income===v?"#fffbf0":"#fff",cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}>
                      <div style={{width:24,height:24,borderRadius:6,background:answers.income===v?gold:"#e5e5e5",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,marginTop:2}}>
                        {answers.income===v && <span style={{color:"#fff",fontSize:13,fontWeight:700}}>✓</span>}
                      </div>
                      <div>
                        <div style={{fontSize:14,fontWeight:700,color:"#222",marginBottom:3}}>{label}</div>
                        <div style={{fontSize:12,color:"#777",lineHeight:1.5}}>{desc}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              {step === 3 && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  {([["europe","🇪🇺 Europe"],["americas","🌎 The Americas"],["asia","🌏 Asia"],["any","🌍 Open to anywhere"]] as const).map(([v,label]) => (
                    <button key={v} onClick={() => setA("region", v)} style={{padding:"20px 12px",borderRadius:12,border:`2px solid ${answers.region===v?gold:"#e5e5e5"}`,background:answers.region===v?"#fffbf0":"#fff",cursor:"pointer",textAlign:"center",fontSize:14,fontWeight:600,color:"#222",transition:"all 0.15s"}}>
                      {label}
                    </button>
                  ))}
                </div>
              )}

              {step === 4 && (
                <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
                  {([["beach","🏖️ Beach & coast","Sun, sand, diving"],["city","🏙️ City life","Culture, dining, walkable"],["countryside","🌿 Countryside","Nature, quiet, mountains"],["any","✨ Surprise me","Best overall match"]] as const).map(([v,icon,sub]) => (
                    <button key={v} onClick={() => setA("lifestyle", v)} style={{padding:"18px 12px",borderRadius:12,border:`2px solid ${answers.lifestyle===v?gold:"#e5e5e5"}`,background:answers.lifestyle===v?"#fffbf0":"#fff",cursor:"pointer",textAlign:"center",transition:"all 0.15s"}}>
                      <div style={{fontSize:13,fontWeight:700,color:"#222",marginBottom:4}}>{icon}</div>
                      <div style={{fontSize:11,color:"#888"}}>{sub}</div>
                    </button>
                  ))}
                </div>
              )}

              {step === 5 && (
                <div style={{display:"flex",flexDirection:"column",gap:10}}>
                  <div style={{fontSize:12,color:"#999",textAlign:"center",marginBottom:4}}>Select any that matter — or skip and find matches</div>
                  {([
                    ["english","🗣️ English widely spoken","No language barrier — official or near-official English"],
                    ["taxFree","💵 Tax-free foreign income","Keep more of your SS & pension abroad"],
                    ["easyVisa","✅ Easy visa / residency","Straightforward, fast approval process"]
                  ] as const).map(([key,label,sub]) => (
                    <button key={key} onClick={() => toggle(key)} style={{display:"flex",alignItems:"center",gap:14,padding:"14px 16px",borderRadius:12,border:`2px solid ${answers[key]?gold:"#e5e5e5"}`,background:answers[key]?"#fffbf0":"#fff",cursor:"pointer",textAlign:"left",transition:"all 0.15s"}}>
                      <div style={{width:22,height:22,borderRadius:6,background:answers[key]?gold:"#e5e5e5",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                        {answers[key] && <span style={{color:"#fff",fontSize:13,fontWeight:700}}>✓</span>}
                      </div>
                      <div>
                        <div style={{fontSize:13,fontWeight:600,color:"#222"}}>{label}</div>
                        <div style={{fontSize:11,color:"#888"}}>{sub}</div>
                      </div>
                    </button>
                  ))}
                </div>
              )}

              <div style={{display:"flex",gap:10,marginTop:24}}>
                {step > 0 && (
                  <button onClick={back} style={{padding:"12px 20px",background:"#f3f3f3",border:"none",borderRadius:8,fontSize:13,fontWeight:600,cursor:"pointer",color:"#444"}}>← Back</button>
                )}
                <button onClick={next} disabled={!canNext} style={{flex:1,padding:"13px",background:canNext?dark:"#ccc",color:"#fff",border:"none",borderRadius:8,fontSize:14,fontWeight:700,cursor:canNext?"pointer":"not-allowed",transition:"background 0.2s"}}>
                  {step === STEPS.length - 1 ? "Find My Matches 🎯" : "Next →"}
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}
