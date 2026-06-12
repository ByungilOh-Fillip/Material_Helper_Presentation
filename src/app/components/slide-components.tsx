import React from "react";

// ─── Shared primitives ────────────────────────────────────────────────────────

const BG = "#07101f";
const CARD = "#0d1829";
const NAVY = "#112240";
const YELLOW = "#f5c518";
const BLUE_LT = "#1e3a5f";
const TEXT = "#e8eaf0";
const MUTED = "#7a8aaa";
const BORDER = "rgba(255,255,255,0.07)";

function SlideBase({
  children,
  gradient,
}: {
  children: React.ReactNode;
  gradient?: string;
}) {
  return (
    <div
      className="w-full h-full flex flex-col"
      style={{
        background: gradient ?? BG,
        fontFamily: "'Inter', sans-serif",
        color: TEXT,
        overflow: "hidden",
        position: "relative",
      }}
    >
      <div style={{ height: "3px", background: `linear-gradient(90deg, ${YELLOW} 0%, #e07b00 60%, transparent 100%)` }} />
      {children}
      <div style={{ position: "absolute", bottom: 16, right: 20, color: MUTED, fontSize: "10px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.12em" }}>
        MATERIAL HELPER
      </div>
    </div>
  );
}

function SlideTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Rajdhani', sans-serif",
        fontSize: "clamp(22px, 3.2vw, 42px)",
        fontWeight: 700,
        letterSpacing: "0.04em",
        color: TEXT,
        textTransform: "uppercase",
        lineHeight: 1.1,
        margin: 0,
      }}
    >
      {children}
    </h2>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "clamp(9px, 1vw, 12px)",
        letterSpacing: "0.2em",
        color: YELLOW,
        textTransform: "uppercase",
        marginBottom: "6px",
      }}
    >
      {children}
    </div>
  );
}

function Card({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div
      style={{
        background: CARD,
        border: `1px solid ${BORDER}`,
        borderRadius: "3px",
        padding: "clamp(10px, 1.5vw, 18px)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", marginBottom: "6px" }}>
      <span style={{ color: YELLOW, marginTop: "3px", flexShrink: 0, fontSize: "10px" }}>▸</span>
      <span style={{ color: TEXT, fontSize: "clamp(11px, 1.3vw, 15px)", lineHeight: 1.5 }}>{children}</span>
    </div>
  );
}

function NodeDot({ x, y, label, active }: { x: number; y: number; label: string; active?: boolean }) {
  return (
    <g>
      <circle cx={x} cy={y} r={18} fill={active ? YELLOW : BLUE_LT} stroke={active ? YELLOW : BORDER} strokeWidth="1.5" />
      <text x={x} y={y + 4} textAnchor="middle" fill={active ? BG : MUTED} fontSize="9" fontFamily="JetBrains Mono">
        {label}
      </text>
    </g>
  );
}

// ─── Slide 1: Cover ──────────────────────────────────────────────────────────

export function SlideCover() {
  return (
    <SlideBase gradient={`radial-gradient(ellipse 80% 70% at 60% 50%, #0d2347 0%, ${BG} 70%)`}>
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.25 }}
        viewBox="0 0 800 450"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <marker id="arrow" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} />
          </marker>
        </defs>
        <line x1={120} y1={220} x2={200} y2={160} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={200} y1={160} x2={300} y2={180} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={300} y1={180} x2={400} y2={140} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={400} y1={140} x2={500} y2={200} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={500} y1={200} x2={600} y2={160} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={300} y1={180} x2={350} y2={280} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={350} y1={280} x2={460} y2={300} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <line x1={460} y1={300} x2={500} y2={200} stroke={BORDER} strokeWidth="1.5" markerEnd="url(#arrow)" />
        <NodeDot x={120} y={220} label="TEX" />
        <NodeDot x={200} y={160} label="UV" active />
        <NodeDot x={300} y={180} label="MUL" />
        <NodeDot x={400} y={140} label="LRP" active />
        <NodeDot x={500} y={200} label="ADD" />
        <NodeDot x={600} y={160} label="OUT" active />
        <NodeDot x={350} y={280} label="FRE" />
        <NodeDot x={460} y={300} label="SAT" />
        <rect x={620} y={100} width={160} height={130} rx="4" fill={CARD} stroke={YELLOW} strokeWidth="1" opacity="0.6" />
        <rect x={630} y={110} width={140} height={110} rx="2" fill="#0a1f3a" />
        <circle cx={700} cy={165} r={35} fill="#1a3a6f" stroke={BLUE_LT} strokeWidth="1" />
        <ellipse cx={700} cy={165} rx={20} ry={25} fill="#1e4a8f" />
        <text x={700} y={215} textAnchor="middle" fill={MUTED} fontSize="8" fontFamily="JetBrains Mono">PREVIEW</text>
      </svg>

      <div className="flex-1 flex flex-col items-start justify-center" style={{ paddingLeft: "8%", zIndex: 1 }}>
        <SectionLabel>언리얼 엔진 인터랙티브 머티리얼 학습 & 프로토타이핑 플랫폼</SectionLabel>
        <div style={{ marginTop: "12px", marginBottom: "8px" }}>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(36px, 7vw, 88px)", fontWeight: 700, letterSpacing: "0.06em", color: TEXT, lineHeight: 0.95, textTransform: "uppercase" }}>
            MATERIAL
          </div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(36px, 7vw, 88px)", fontWeight: 700, letterSpacing: "0.06em", color: YELLOW, lineHeight: 0.95, textTransform: "uppercase" }}>
            HELPER
          </div>
        </div>
        <div style={{ width: "60px", height: "2px", background: YELLOW, margin: "18px 0" }} />
        <p style={{ color: MUTED, fontSize: "clamp(12px, 1.6vw, 18px)", maxWidth: "460px", lineHeight: 1.6, margin: 0 }}>
          언리얼 엔진을 위한 머티리얼 학습 플랫폼
        </p>
        <div style={{ marginTop: "28px", padding: "10px 20px", border: `1px solid ${YELLOW}`, borderRadius: "2px", fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(10px, 1.2vw, 13px)", color: YELLOW, letterSpacing: "0.1em" }}>
          "더 빠르게 배우고. 더 빠르게 만들고. 즉시 시각화하라."
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 2: Overview ───────────────────────────────────────────────────────

export function SlideOverview() {
  const goals = [
    "머티리얼 개발 반복 시간 단축",
    "머티리얼 학습 경험 향상",
    "모듈형 머티리얼 디자인 패턴 지원",
    "실시간 시각적 피드백 제공",
  ];
  const keywords = ["시각화", "학습", "자동화", "문서화"];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ flex: 1, paddingRight: "clamp(16px,3vw,40px)" }}>
          <SectionLabel>슬라이드 02 — 프로젝트 개요</SectionLabel>
          <SlideTitle>What is <span style={{ color: YELLOW }}>Material Helper?</span></SlideTitle>
          <p style={{ color: MUTED, fontSize: "clamp(11px,1.3vw,14px)", lineHeight: 1.7, margin: "16px 0 24px", maxWidth: "500px" }}>
            Material Helper는 언리얼 엔진 머티리얼을 학습하고, 생성하고, 테스트하는 과정을 단순화하기 위해 설계된 교육 및 생산성 중심의 플랫폼입니다.
          </p>
          <SectionLabel>목표</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {goals.map((g) => <Bullet key={g}>{g}</Bullet>)}
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px", width: "clamp(120px,18vw,200px)" }}>
          <SectionLabel>핵심 키워드</SectionLabel>
          {keywords.map((k) => (
            <Card key={k} style={{ textAlign: "center" }}>
              <div style={{ color: YELLOW, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(13px,1.5vw,17px)", letterSpacing: "0.04em" }}>
                {k}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 3: Problem ────────────────────────────────────────────────────────

export function SlideProblem() {
  const problems = [
    { n: "01", text: "머티리얼 개발 시 빌드-테스트 사이클의 반복으로 느린 피드백이 발생합니다." },
    { n: "02", text: "머티리얼 그래프의 중간 결과를 쉽게 확인하기 어렵습니다." },
    { n: "03", text: "언리얼 엔진 버전 간 머티리얼 시스템이 빠르게 변화합니다." },
    { n: "04", text: "학습 자료가 분산되어 있어 초보자가 접근하기 어렵습니다." },
  ];
  const steps = ["노드 생성", "빌드", "적용", "테스트", "수정", "반복"];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <div style={{ flex: 1.2, paddingRight: "clamp(16px,3vw,40px)" }}>
          <SectionLabel>슬라이드 03 — 문제 정의</SectionLabel>
          <SlideTitle>Current <span style={{ color: YELLOW }}>Challenges</span></SlideTitle>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginTop: "20px" }}>
            {problems.map((p) => (
              <Card key={p.n} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                <div style={{ color: YELLOW, fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(16px,2.2vw,28px)", fontWeight: 700, lineHeight: 1, flexShrink: 0 }}>{p.n}</div>
                <p style={{ color: TEXT, fontSize: "clamp(10px,1.1vw,13px)", lineHeight: 1.5, margin: 0 }}>{p.text}</p>
              </Card>
            ))}
          </div>
        </div>
        <div style={{ width: "clamp(140px,20vw,220px)" }}>
          <SectionLabel>기존 작업 흐름</SectionLabel>
          <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "8px" }}>
            {steps.map((s, i) => (
              <React.Fragment key={s}>
                <div style={{
                  background: i === steps.length - 1 ? "rgba(245,197,24,0.1)" : CARD,
                  border: `1px solid ${i === steps.length - 1 ? YELLOW : BORDER}`,
                  borderRadius: "2px",
                  padding: "6px 10px",
                  fontSize: "clamp(10px,1.1vw,13px)",
                  color: i === steps.length - 1 ? YELLOW : MUTED,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.02em",
                }}>
                  {s}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ color: MUTED, textAlign: "center", fontSize: "10px" }}>↓</div>
                )}
              </React.Fragment>
            ))}
          </div>
          <p style={{ color: "rgba(245,197,24,0.6)", fontSize: "clamp(9px,0.9vw,11px)", marginTop: "10px", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.06em" }}>
            ⚠ 비효율적인 시간 낭비
          </p>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 4: Users ──────────────────────────────────────────────────────────

export function SlideUsers() {
  const users = [
    { icon: "⚙", name: "게임 개발자", desc: "복잡한 셰이더 효과의 빠른 프로토타이핑" },
    { icon: "📖", name: "학생", desc: "체계적인 머티리얼 학습 플랫폼" },
    { icon: "🎨", name: "테크니컬 아티스트", desc: "시각적 실험 환경 제공" },
    { icon: "🎮", name: "게임 디자이너", desc: "깊은 기술 지식 없이도 셰이더 동작 이해" },
    { icon: "🚀", name: "취업 준비생", desc: "포트폴리오 및 학습 지원" },
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 04 — 대상 사용자</SectionLabel>
        <SlideTitle>Who <span style={{ color: YELLOW }}>Benefits?</span></SlideTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "10px", marginTop: "20px", flex: 1 }}>
          {users.map((u) => (
            <Card key={u.name} style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: "8px", justifyContent: "center" }}>
              <div style={{ fontSize: "clamp(20px,3vw,36px)" }}>{u.icon}</div>
              <div style={{ color: YELLOW, fontWeight: 700, fontSize: "clamp(11px,1.2vw,14px)" }}>{u.name}</div>
              <div style={{ color: MUTED, fontSize: "clamp(9px,1vw,12px)", lineHeight: 1.4 }}>{u.desc}</div>
            </Card>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 5: Values ─────────────────────────────────────────────────────────

export function SlideValues() {
  const values = [
    { icon: "⏱", name: "시간 절약", desc: "반복적인 테스트 사이클 감소" },
    { icon: "⚡", name: "자동화", desc: "재사용 가능한 모듈 및 템플릿 제공" },
    { icon: "👁", name: "시각화", desc: "변경 사항에 대한 즉각적인 피드백" },
    { icon: "📚", name: "문서화", desc: "체계적인 학습 리소스 제공" },
    { icon: "📈", name: "확장성", desc: "머티리얼 지식 베이스의 지속적 확장" },
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 05 — 핵심 가치 제안</SectionLabel>
        <SlideTitle>Core <span style={{ color: YELLOW }}>Values</span></SlideTitle>
        <div style={{ flex: 1, display: "flex", gap: "clamp(16px,3vw,40px)", alignItems: "center", marginTop: "16px" }}>
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
            {values.map((v, i) => (
              <div
                key={v.name}
                style={{
                  display: "flex", alignItems: "center", gap: "14px",
                  background: CARD, border: `1px solid ${i === 0 ? YELLOW : BORDER}`,
                  borderRadius: "2px", padding: "10px 16px",
                  marginLeft: `${i * 24}px`,
                }}
              >
                <span style={{ fontSize: "clamp(14px,2vw,22px)" }}>{v.icon}</span>
                <div>
                  <div style={{ color: i === 0 ? YELLOW : TEXT, fontWeight: 700, fontSize: "clamp(12px,1.3vw,15px)" }}>{v.name}</div>
                  <div style={{ color: MUTED, fontSize: "clamp(10px,1.1vw,13px)" }}>{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ width: "clamp(100px,16vw,180px)", flexShrink: 0 }}>
            <svg viewBox="0 0 180 220" width="100%" style={{ display: "block" }}>
              {[0, 1, 2, 3, 4].map((i) => {
                const h = 32;
                const baseW = 160 - i * 28;
                const x = (180 - baseW) / 2;
                const y = i * (h + 4) + 10;
                return (
                  <rect key={i} x={x} y={y} width={baseW} height={h} rx="2"
                    fill={i === 0 ? "rgba(245,197,24,0.15)" : NAVY}
                    stroke={i === 0 ? YELLOW : BORDER} strokeWidth="1"
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 6: Vision ─────────────────────────────────────────────────────────

export function SlideVision() {
  const phases = [
    { n: "01", title: "학습 플랫폼", desc: "핵심 노드 문서, 인터랙티브 튜토리얼" },
    { n: "02", title: "머티리얼 샌드박스", desc: "실시간 프리뷰 및 실험 환경" },
    { n: "03", title: "모듈 라이브러리", desc: "재사용 가능한 머티리얼 함수 라이브러리" },
    { n: "04", title: "문서화 허브", desc: "자동 문서 생성 및 커뮤니티 공유" },
  ];
  return (
    <SlideBase gradient={`linear-gradient(135deg, ${BG} 60%, #0d2347 100%)`}>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 06 — 제품 비전</SectionLabel>
        <SlideTitle>From Learning Tool to <span style={{ color: YELLOW }}>Material Ecosystem</span></SlideTitle>
        <div style={{ display: "flex", alignItems: "center", gap: "0", marginTop: "clamp(20px,4vw,40px)", flex: 1 }}>
          {phases.map((p, i) => (
            <React.Fragment key={p.n}>
              <div style={{ flex: 1, textAlign: "center" }}>
                <div style={{
                  width: "clamp(42px,6vw,64px)", height: "clamp(42px,6vw,64px)",
                  borderRadius: "50%",
                  background: i === 0 ? YELLOW : NAVY,
                  border: `2px solid ${i === 0 ? YELLOW : BLUE_LT}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 12px",
                  fontFamily: "'Rajdhani', sans-serif", fontWeight: 700,
                  fontSize: "clamp(13px,1.8vw,20px)",
                  color: i === 0 ? BG : MUTED,
                }}>
                  {p.n}
                </div>
                <div style={{ color: i === 0 ? YELLOW : TEXT, fontWeight: 700, fontSize: "clamp(12px,1.3vw,15px)", marginBottom: "6px" }}>{p.title}</div>
                <div style={{ color: MUTED, fontSize: "clamp(9px,1vw,12px)", lineHeight: 1.5 }}>{p.desc}</div>
              </div>
              {i < phases.length - 1 && (
                <div style={{ color: YELLOW, fontSize: "clamp(12px,1.8vw,20px)", flexShrink: 0, marginBottom: "clamp(32px,5vw,52px)" }}>→</div>
              )}
            </React.Fragment>
          ))}
        </div>
        <Card style={{ marginTop: "16px", borderColor: "rgba(245,197,24,0.2)", textAlign: "center" }}>
          <span style={{ color: YELLOW, fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(10px,1.2vw,14px)", letterSpacing: "0.06em" }}>
            비전: 언리얼 머티리얼 학습과 실험의 중심 허브가 되는 것
          </span>
        </Card>
      </div>
    </SlideBase>
  );
}

// ─── Slide 7: Feature 1 ──────────────────────────────────────────────────────

export function SlideFeature1() {
  const features = [
    "모든 머티리얼 노드에 대한 설명 제공",
    "입력 및 출력 문서화",
    "시각적 사용 예시 포함",
    "언리얼 엔진 버전별 정보 제공",
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)", gap: "clamp(20px,4vw,48px)" }}>
        <div style={{ flex: 1 }}>
          <SectionLabel>슬라이드 07 — 핵심 기능 #1</SectionLabel>
          <SlideTitle>Material Node <span style={{ color: YELLOW }}>Encyclopedia</span></SlideTitle>
          <div style={{ marginTop: "24px", display: "flex", flexDirection: "column", gap: "6px" }}>
            {features.map((f) => <Bullet key={f}>{f}</Bullet>)}
          </div>
          <Card style={{ marginTop: "20px", borderColor: "rgba(245,197,24,0.2)" }}>
            <div style={{ color: MUTED, fontSize: "clamp(10px,1.1vw,13px)", lineHeight: 1.6 }}>
              <span style={{ color: YELLOW }}>기대 효과: </span>
              여러 리소스를 검색하지 않아도 노드를 바로 이해할 수 있습니다. 모든 문서가 한 플랫폼에 집중됩니다.
            </div>
          </Card>
        </div>
        <div style={{ width: "clamp(160px,24vw,280px)", display: "flex", flexDirection: "column", gap: "8px" }}>
          <SectionLabel>노드 카드 UI 예시</SectionLabel>
          {[{ name: "Lerp", type: "수학", ins: ["A", "B", "Alpha"], out: "Result" }, { name: "Fresnel", type: "유틸리티", ins: ["Normal", "BaseExponent"], out: "Float" }].map((node) => (
            <div key={node.name} style={{ background: NAVY, border: `1px solid ${YELLOW}`, borderRadius: "3px", padding: "10px 12px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "8px" }}>
                <span style={{ color: YELLOW, fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(13px,1.5vw,17px)", letterSpacing: "0.06em" }}>{node.name}</span>
                <span style={{ fontSize: "9px", color: MUTED, background: CARD, padding: "2px 6px", borderRadius: "2px" }}>{node.type}</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "clamp(9px,0.9vw,11px)" }}>
                <div>
                  {node.ins.map((i) => (
                    <div key={i} style={{ color: MUTED, display: "flex", alignItems: "center", gap: "4px", marginBottom: "2px" }}>
                      <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#4a7fd4" }} />
                      {i}
                    </div>
                  ))}
                </div>
                <div style={{ color: MUTED, display: "flex", alignItems: "center", gap: "4px" }}>
                  {node.out}
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: YELLOW }} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 8: Feature 2 ──────────────────────────────────────────────────────

export function SlideFeature2() {
  const examples = ["프레넬 이펙트", "디졸브 이펙트", "텔레그래프 인디케이터", "패닝 텍스처"];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)", gap: "clamp(20px,4vw,48px)" }}>
        <div style={{ flex: 1 }}>
          <SectionLabel>슬라이드 08 — 핵심 기능 #2</SectionLabel>
          <SlideTitle>Modular Material <span style={{ color: YELLOW }}>Recipes</span></SlideTitle>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <Bullet>재사용 가능한 노드 구성</Bullet>
            <Bullet>이름이 지정된 머티리얼 함수</Bullet>
            <Bullet>사전 정의된 템플릿 제공</Bullet>
            <Bullet>컴포지션 기반 워크플로우</Bullet>
          </div>
          <div style={{ marginTop: "18px" }}>
            <SectionLabel>예시 레시피</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
              {examples.map((e) => (
                <div key={e} style={{ background: NAVY, border: `1px solid ${BLUE_LT}`, borderRadius: "2px", padding: "8px 12px", color: TEXT, fontSize: "clamp(10px,1.1vw,13px)" }}>
                  {e}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "clamp(140px,22vw,250px)" }}>
          <SectionLabel>레시피 → 모듈 → 머티리얼</SectionLabel>
          <svg viewBox="0 0 200 260" width="100%" style={{ display: "block", marginTop: "8px" }}>
            <defs>
              <marker id="arrowB" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={YELLOW} />
              </marker>
            </defs>
            {[{ label: "레시피", y: 20, active: true }, { label: "모듈", y: 110, active: false }, { label: "머티리얼", y: 200, active: true }].map((box) => (
              <g key={box.label}>
                <rect x="20" y={box.y} width="160" height="50" rx="3"
                  fill={box.active ? "rgba(245,197,24,0.08)" : NAVY}
                  stroke={box.active ? YELLOW : BLUE_LT} strokeWidth="1.5"
                />
                <text x="100" y={box.y + 30} textAnchor="middle" fill={box.active ? YELLOW : TEXT} fontSize="13" fontFamily="Inter" fontWeight="600">{box.label}</text>
              </g>
            ))}
            <line x1="100" y1="70" x2="100" y2="108" stroke={YELLOW} strokeWidth="1.5" markerEnd="url(#arrowB)" />
            <line x1="100" y1="160" x2="100" y2="198" stroke={YELLOW} strokeWidth="1.5" markerEnd="url(#arrowB)" />
          </svg>
          <Card style={{ borderColor: "rgba(245,197,24,0.2)" }}>
            <div style={{ color: MUTED, fontSize: "clamp(9px,1vw,12px)", lineHeight: 1.5 }}>
              <span style={{ color: YELLOW }}>기대 효과: </span>복잡한 머티리얼을 빠르게 완성
            </div>
          </Card>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 9: Feature 3 ──────────────────────────────────────────────────────

export function SlideFeature3() {
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)", gap: "clamp(20px,4vw,48px)" }}>
        <div style={{ flex: 1 }}>
          <SectionLabel>슬라이드 09 — 핵심 기능 #3</SectionLabel>
          <SlideTitle>Interactive Material <span style={{ color: YELLOW }}>Sandbox</span></SlideTitle>
          <div style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "6px" }}>
            <Bullet>그래프 기반 편집 환경</Bullet>
            <Bullet>실시간 뷰포트 프리뷰</Bullet>
            <Bullet>메시 선택 기능 (구체, 큐브, 평면)</Bullet>
            <Bullet>파라미터 컨트롤 패널</Bullet>
          </div>
          <div style={{ marginTop: "16px" }}>
            <SectionLabel>사용자가 수정 가능한 항목</SectionLabel>
            <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
              {["스칼라 파라미터", "벡터 파라미터"].map((p) => (
                <div key={p} style={{ flex: 1, background: NAVY, border: `1px solid ${BLUE_LT}`, borderRadius: "2px", padding: "8px 10px", textAlign: "center" }}>
                  <div style={{ color: YELLOW, fontSize: "clamp(9px,1vw,12px)" }}>{p}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "clamp(160px,28vw,320px)" }}>
          <SectionLabel>샌드박스 UI 미리보기</SectionLabel>
          <div style={{ background: NAVY, border: `1px solid ${BORDER}`, borderRadius: "3px", padding: "10px", fontSize: "clamp(9px,0.9vw,11px)" }}>
            <div style={{ color: MUTED, fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px", letterSpacing: "0.08em" }}>노드 그래프</div>
            <svg viewBox="0 0 240 80" width="100%" style={{ display: "block", background: CARD, borderRadius: "2px", marginBottom: "8px" }}>
              <rect x="8" y="20" width="56" height="40" rx="3" fill={BLUE_LT} stroke={BORDER} strokeWidth="1" />
              <text x="36" y="43" textAnchor="middle" fill={TEXT} fontSize="9" fontFamily="JetBrains Mono">TexSamp</text>
              <rect x="92" y="14" width="56" height="52" rx="3" fill={BLUE_LT} stroke={YELLOW} strokeWidth="1" />
              <text x="120" y="40" textAnchor="middle" fill={YELLOW} fontSize="9" fontFamily="JetBrains Mono">Multiply</text>
              <rect x="176" y="24" width="56" height="32" rx="3" fill={BLUE_LT} stroke={BORDER} strokeWidth="1" />
              <text x="204" y="43" textAnchor="middle" fill={TEXT} fontSize="9" fontFamily="JetBrains Mono">Output</text>
              <line x1="64" y1="40" x2="92" y2="40" stroke={MUTED} strokeWidth="1" />
              <line x1="148" y1="40" x2="176" y2="40" stroke={MUTED} strokeWidth="1" />
            </svg>
            <div style={{ color: MUTED, fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px", letterSpacing: "0.08em" }}>뷰포트</div>
            <div style={{ background: "#0a1f3a", borderRadius: "2px", height: "clamp(40px,5vw,60px)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
              <svg viewBox="0 0 60 60" width="clamp(40px,4vw,48px)" height="clamp(40px,4vw,48px)">
                <circle cx="30" cy="30" r="24" fill="#1a3a6f" stroke={BLUE_LT} strokeWidth="1.5" />
                <ellipse cx="30" cy="30" rx="14" ry="20" fill="#1e4a8f" />
              </svg>
            </div>
            <div style={{ color: MUTED, fontFamily: "'JetBrains Mono', monospace", marginBottom: "6px", letterSpacing: "0.08em" }}>파라미터</div>
            {[{ name: "러프니스", val: 0.42 }, { name: "메탈릭", val: 0.78 }].map((p) => (
              <div key={p.name} style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ color: MUTED, fontSize: "9px", width: "50px", flexShrink: 0 }}>{p.name}</span>
                <div style={{ flex: 1, height: "4px", background: CARD, borderRadius: "2px" }}>
                  <div style={{ width: `${p.val * 100}%`, height: "100%", background: YELLOW, borderRadius: "2px" }} />
                </div>
                <span style={{ color: TEXT, fontSize: "9px", fontFamily: "'JetBrains Mono', monospace" }}>{p.val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 10: Architecture ───────────────────────────────────────────────────

export function SlideArchitecture() {
  const layers = [
    { name: "지식 레이어", color: YELLOW, items: ["노드 데이터베이스", "모듈 데이터베이스"] },
    { name: "애플리케이션 레이어", color: "#4a9fd4", items: ["그래프 에디터", "평가 엔진", "문서 뷰어"] },
    { name: "시각화 레이어", color: "#4ad4a0", items: ["실시간 프리뷰", "파라미터 컨트롤"] },
    { name: "스토리지", color: MUTED, items: ["정적 데이터 저장소"] },
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 10 — 기술 아키텍처</SectionLabel>
        <SlideTitle>System <span style={{ color: YELLOW }}>Architecture</span></SlideTitle>
        <div style={{ display: "flex", gap: "clamp(16px,3vw,32px)", marginTop: "20px", flex: 1, alignItems: "stretch" }}>
          {layers.map((layer) => (
            <div key={layer.name} style={{
              flex: 1, background: CARD,
              border: `1px solid ${layer.color}`, borderTop: `3px solid ${layer.color}`,
              borderRadius: "3px", padding: "clamp(10px,1.5vw,16px)",
              display: "flex", flexDirection: "column", gap: "8px",
            }}>
              <div style={{ color: layer.color, fontWeight: 700, fontSize: "clamp(11px,1.3vw,15px)", textTransform: "uppercase", letterSpacing: "0.04em" }}>{layer.name}</div>
              {layer.items.map((item) => (
                <div key={item} style={{ background: NAVY, borderRadius: "2px", padding: "6px 10px", color: MUTED, fontSize: "clamp(10px,1.1vw,13px)" }}>
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
          <svg viewBox="0 0 600 30" style={{ width: "100%", maxWidth: "800px", height: "30px" }}>
            <defs>
              <marker id="arrowC" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
                <path d="M0,0 L6,3 L0,6 Z" fill={MUTED} />
              </marker>
            </defs>
            <line x1="140" y1="15" x2="200" y2="15" stroke={MUTED} strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrowC)" />
            <line x1="310" y1="15" x2="370" y2="15" stroke={MUTED} strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrowC)" />
            <line x1="470" y1="15" x2="530" y2="15" stroke={MUTED} strokeWidth="1" strokeDasharray="4,3" markerEnd="url(#arrowC)" />
          </svg>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 11: Data ───────────────────────────────────────────────────────────

export function SlideData() {
  const stored = ["노드 정의", "모듈 레시피", "머티리얼 예시", "학습 문서"];
  const chars = [
    { label: "대부분 정적 데이터로 구성", icon: "💾" },
    { label: "버전 관리 지원", icon: "🔀" },
    { label: "확장 가능한 구조", icon: "📦" },
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)", gap: "clamp(20px,4vw,48px)" }}>
        <div style={{ flex: 1 }}>
          <SectionLabel>슬라이드 11 — 데이터 전략</SectionLabel>
          <SlideTitle>Data <span style={{ color: YELLOW }}>Management</span></SlideTitle>
          <div style={{ marginTop: "20px" }}>
            <SectionLabel>저장 데이터</SectionLabel>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginTop: "8px" }}>
              {stored.map((s) => (
                <div key={s} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: "2px", padding: "10px 14px", display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: YELLOW, flexShrink: 0 }} />
                  <span style={{ color: TEXT, fontSize: "clamp(10px,1.1vw,13px)" }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          <div style={{ marginTop: "18px" }}>
            <SectionLabel>데이터 특성</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginTop: "8px" }}>
              {chars.map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "16px" }}>{c.icon}</span>
                  <span style={{ color: MUTED, fontSize: "clamp(10px,1.2vw,14px)" }}>{c.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "clamp(160px,22vw,240px)", display: "flex", flexDirection: "column", gap: "12px" }}>
          <SectionLabel>기대 효과</SectionLabel>
          {[{ title: "낮은 유지보수 비용", pct: 90 }, { title: "높은 안정성", pct: 95 }, { title: "빠른 데이터 조회", pct: 85 }].map((b) => (
            <Card key={b.title}>
              <div style={{ color: TEXT, fontSize: "clamp(10px,1.1vw,13px)", marginBottom: "8px" }}>{b.title}</div>
              <div style={{ height: "6px", background: NAVY, borderRadius: "3px" }}>
                <div style={{ width: `${b.pct}%`, height: "100%", background: YELLOW, borderRadius: "3px" }} />
              </div>
              <div style={{ color: YELLOW, fontSize: "clamp(9px,1vw,12px)", textAlign: "right", marginTop: "4px", fontFamily: "'JetBrains Mono', monospace" }}>{b.pct}%</div>
            </Card>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 12: MVP ───────────────────────────────────────────────────────────

export function SlideMvp() {
  const features = [
    "기본 머티리얼 노드 문서화",
    "모듈형 머티리얼 예시 라이브러리",
    "텔레그래프 머티리얼 예시",
    "실시간 파라미터 프리뷰",
    "기본 학습 문서",
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)", gap: "clamp(20px,4vw,48px)" }}>
        <div style={{ flex: 1 }}>
          <SectionLabel>슬라이드 12 — MVP 범위</SectionLabel>
          <SlideTitle>Minimum Viable <span style={{ color: YELLOW }}>Product</span></SlideTitle>
          <div style={{ marginTop: "12px", display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontSize: "clamp(10px,1.1vw,13px)", color: MUTED }}>대상 엔진:</span>
            <span style={{ fontFamily: "'Rajdhani', sans-serif", fontWeight: 700, fontSize: "clamp(12px,1.4vw,16px)", color: YELLOW, letterSpacing: "0.06em" }}>Unreal Engine 5.7</span>
          </div>
          <div style={{ marginTop: "20px" }}>
            <SectionLabel>포함 기능</SectionLabel>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "10px" }}>
              {features.map((f, i) => (
                <div key={f} style={{ display: "flex", alignItems: "center", gap: "14px", background: CARD, border: `1px solid ${BORDER}`, borderRadius: "2px", padding: "10px 14px" }}>
                  <div style={{ width: "24px", height: "24px", borderRadius: "50%", background: "rgba(245,197,24,0.1)", border: `1px solid ${YELLOW}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: "11px", color: YELLOW }}>
                    {i + 1}
                  </div>
                  <span style={{ color: TEXT, fontSize: "clamp(10px,1.2vw,14px)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ width: "clamp(160px,22vw,240px)" }}>
          <SectionLabel>성공 기준</SectionLabel>
          <Card style={{ borderColor: "rgba(245,197,24,0.3)", marginTop: "8px" }}>
            <div style={{ color: TEXT, fontSize: "clamp(11px,1.3vw,14px)", lineHeight: 1.7 }}>
              사용자가 언리얼 엔진을 열지 않고도 머티리얼을 <span style={{ color: YELLOW }}>학습</span>하고, <span style={{ color: YELLOW }}>수정</span>하고, <span style={{ color: YELLOW }}>프리뷰</span>할 수 있어야 합니다.
            </div>
          </Card>
          <div style={{ marginTop: "16px" }}>
            {[{ label: "노드 커버리지", val: 60 }, { label: "문서 커버리지", val: 80 }, { label: "프리뷰 정확도", val: 90 }].map((m) => (
              <div key={m.label} style={{ marginBottom: "10px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                  <span style={{ color: MUTED, fontSize: "clamp(9px,1vw,12px)" }}>{m.label}</span>
                  <span style={{ color: YELLOW, fontSize: "clamp(9px,1vw,12px)", fontFamily: "'JetBrains Mono', monospace" }}>{m.val}%</span>
                </div>
                <div style={{ height: "4px", background: NAVY, borderRadius: "2px" }}>
                  <div style={{ width: `${m.val}%`, height: "100%", background: YELLOW, borderRadius: "2px" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 13: Roadmap ───────────────────────────────────────────────────────

export function SlideRoadmap() {
  const phases = [
    { n: "01", name: "MVP 출시", status: "current", items: ["기본 노드", "실시간 프리뷰", "핵심 문서"] },
    { n: "02", name: "고급 함수", status: "next", items: ["복잡한 셰이더", "함수 라이브러리", "UE5.7 호환"] },
    { n: "03", name: "커뮤니티 공유", status: "future", items: ["사용자 레시피", "평점 시스템", "검색 기능"] },
    { n: "04", name: "문서 자동화", status: "future", items: ["자동 문서 생성", "PDF 내보내기", "위키 연동"] },
    { n: "05", name: "AI 지원", status: "future", items: ["노드 추천", "그래프 생성", "AI 학습 보조"] },
  ];
  const colors: Record<string, string> = { current: YELLOW, next: "#4a9fd4", future: BLUE_LT };
  return (
    <SlideBase>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 13 — 향후 확장</SectionLabel>
        <SlideTitle>Future <span style={{ color: YELLOW }}>Roadmap</span></SlideTitle>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px", flex: 1 }}>
          {phases.map((p) => (
            <div key={p.n} style={{
              flex: 1, background: CARD,
              border: `1px solid ${colors[p.status]}`, borderTop: `3px solid ${colors[p.status]}`,
              borderRadius: "3px", padding: "clamp(10px,1.5vw,16px)",
              display: "flex", flexDirection: "column", gap: "6px",
            }}>
              <div style={{ color: colors[p.status], fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(9px,1vw,11px)", letterSpacing: "0.1em" }}>PHASE {p.n}</div>
              <div style={{ color: p.status === "current" ? YELLOW : TEXT, fontWeight: 700, fontSize: "clamp(11px,1.2vw,14px)" }}>{p.name}</div>
              <div style={{ flex: 1 }}>
                {p.items.map((item) => (
                  <div key={item} style={{ color: MUTED, fontSize: "clamp(9px,1vw,12px)", marginBottom: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
                    <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: colors[p.status], flexShrink: 0 }} />
                    {item}
                  </div>
                ))}
              </div>
              {p.status === "current" && (
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "9px", color: YELLOW, background: "rgba(245,197,24,0.1)", padding: "3px 6px", borderRadius: "2px", letterSpacing: "0.08em" }}>
                  진행 중
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 14: Impact ─────────────────────────────────────────────────────────

export function SlideImpact() {
  const impacts = [
    { group: "개발자", icon: "⚙", benefit: "빠른 반복 개발 사이클", metric: "테스트 시간 60% 감소" },
    { group: "학생", icon: "📖", benefit: "쉬운 학습 과정", metric: "학습 속도 2배 향상" },
    { group: "팀", icon: "👥", benefit: "머티리얼 지식 공유", metric: "통합 라이브러리" },
    { group: "프로젝트", icon: "🎯", benefit: "생산성 향상", metric: "재사용 가능한 에셋" },
  ];
  return (
    <SlideBase>
      <div className="flex-1 flex flex-col" style={{ padding: "clamp(18px,3vw,40px) clamp(24px,5vw,64px)" }}>
        <SectionLabel>슬라이드 14 — 기대 효과</SectionLabel>
        <SlideTitle>Expected <span style={{ color: YELLOW }}>Benefits</span></SlideTitle>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginTop: "20px", flex: 1 }}>
          {impacts.map((im) => (
            <Card key={im.group} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
              <div style={{ fontSize: "clamp(20px,3vw,36px)", flexShrink: 0 }}>{im.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ color: YELLOW, fontWeight: 700, fontSize: "clamp(13px,1.5vw,18px)" }}>{im.group}에게</div>
                <div style={{ color: TEXT, fontSize: "clamp(10px,1.2vw,14px)", marginTop: "4px" }}>{im.benefit}</div>
                <div style={{ marginTop: "8px", background: NAVY, borderRadius: "2px", padding: "4px 10px", display: "inline-block", fontSize: "clamp(9px,1vw,12px)", color: YELLOW }}>{im.metric}</div>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ display: "flex", gap: "12px", marginTop: "12px" }}>
          {["테스트 시간 단축", "학습 속도 향상", "머티리얼 에셋 재사용"].map((m) => (
            <div key={m} style={{ flex: 1, background: "rgba(245,197,24,0.08)", border: `1px solid rgba(245,197,24,0.2)`, borderRadius: "2px", padding: "8px", textAlign: "center", color: YELLOW, fontSize: "clamp(9px,1vw,12px)" }}>
              {m}
            </div>
          ))}
        </div>
      </div>
    </SlideBase>
  );
}

// ─── Slide 15: Closing ───────────────────────────────────────────────────────

export function SlideClosing() {
  return (
    <SlideBase gradient={`radial-gradient(ellipse 80% 70% at 40% 50%, #0d2347 0%, ${BG} 70%)`}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12 }} viewBox="0 0 800 450" preserveAspectRatio="xMidYMid slice">
        <line x1="50" y1="400" x2="750" y2="50" stroke={BLUE_LT} strokeWidth="1" />
        <line x1="100" y1="400" x2="750" y2="100" stroke={BLUE_LT} strokeWidth="1" />
        <line x1="400" y1="0" x2="400" y2="450" stroke={BLUE_LT} strokeWidth="1" strokeDasharray="6,6" />
        {[120, 240, 360, 480, 600, 720].map((x) =>
          [90, 180, 270, 360].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r={2} fill={BLUE_LT} />
          ))
        )}
      </svg>

      <div className="flex-1 flex flex-col items-center justify-center text-center" style={{ zIndex: 1, padding: "40px" }}>
        <SectionLabel>감사합니다</SectionLabel>
        <div style={{ marginTop: "16px" }}>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(36px,7vw,84px)", fontWeight: 700, letterSpacing: "0.06em", color: TEXT, lineHeight: 0.95, textTransform: "uppercase" }}>
            MATERIAL
          </div>
          <div style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: "clamp(36px,7vw,84px)", fontWeight: 700, letterSpacing: "0.06em", color: YELLOW, lineHeight: 0.95, textTransform: "uppercase" }}>
            HELPER
          </div>
        </div>
        <div style={{ width: "80px", height: "2px", background: YELLOW, margin: "24px auto" }} />
        <p style={{ color: TEXT, fontSize: "clamp(13px,1.8vw,20px)", maxWidth: "560px", lineHeight: 1.6 }}>
          머티리얼 제작을 더 빠르고, 더 단순하고, 더 접근하기 쉽게
        </p>
        <p style={{ color: MUTED, fontSize: "clamp(11px,1.4vw,16px)", maxWidth: "600px", lineHeight: 1.7, marginTop: "16px" }}>
          시각화, 모듈성, 실시간 피드백을 통해 머티리얼 학습과 프로토타이핑을 혁신합니다.
        </p>
      </div>
    </SlideBase>
  );
}
