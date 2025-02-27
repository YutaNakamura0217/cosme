'use client';

import { Box, Typography, Button, Container, Paper, Grid, Divider } from '@mui/material';
// import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 6 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className="fade-in"
              sx={{ 
                fontWeight: 600,
                color: 'primary.main',
                mb: 2.5,
                letterSpacing: '0.02em'
              }}
            >
              BeautyGenius
            </Typography>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              className="fade-in"
              sx={{ 
                mb: 3.5, 
                color: 'text.primary',
                fontWeight: 500,
                letterSpacing: '0.01em'
              }}
            >
              AIであなただけの<br />美容専門家
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              className="fade-in-up"
              sx={{ 
                mb: 4.5,
                color: 'text.secondary',
                lineHeight: 1.8,
                fontSize: '1.05rem'
              }}
            >
              洗練されたAIテクノロジーを活用し、あなた一人ひとりに合わせたパーソナライズされた美容アドバイスをお届けします。
              顔型分析、肌質診断、トレンドとあなたの好みを組み合わせた、最適な美容提案をぜひ体験してください。
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, mb: 5 }} className="fade-in-up">
              <Button 
                variant="contained" 
                size="large"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 1.5,
                  boxShadow: '0 4px 12px rgba(212, 176, 152, 0.25)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 6px 16px rgba(212, 176, 152, 0.4)',
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                無料で始める
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                color="primary"
                sx={{
                  px: 4,
                  py: 1.5,
                  borderRadius: 1.5,
                  borderWidth: 1.5,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderWidth: 1.5,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                詳しく見る
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={4}
              sx={{ 
                borderRadius: 3,
                overflow: 'hidden',
                height: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.06)',
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(145deg, rgba(232, 214, 195, 0.3), rgba(212, 176, 152, 0.05))',
                  zIndex: 1
                }
              }}
              className="fade-in"
            >
              <Typography 
                variant="h5" 
                color="text.secondary"
                sx={{
                  position: 'relative',
                  zIndex: 2,
                  fontWeight: 400,
                  letterSpacing: '0.03em',
                  color: 'text.secondary'
                }}
              >
                アプリのイメージ画像がここに表示されます
              </Typography>
              {/* 実際の画像が用意できたら以下を使用
              <Image
                src="/images/app-preview.jpg"
                alt="BeautyGenius アプリのプレビュー"
                layout="fill"
                objectFit="cover"
              />
              */}
            </Paper>
          </Grid>
        </Grid>

        <Divider sx={{ my: 8, opacity: 0.5 }} />

        <Box sx={{ mt: 10, mb: 6 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center"
            sx={{ 
              mb: 8,
              color: 'text.primary',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 2,
                backgroundColor: 'primary.main'
              }
            }}
          >
            主な機能
          </Typography>
          <Grid container spacing={5}>
            {[
              {
                title: "AI顔分析",
                description: "高精度なAI画像認識技術により、あなたの顔型や特徴を分析し、最適なメイクアップを提案します。"
              },
              {
                title: "仮想メイク試着",
                description: "様々なメイクアップスタイルをバーチャルに試すことができ、実際に購入する前に効果を確認できます。"
              },
              {
                title: "パーソナルアドバイス",
                description: "あなたの肌質、顔型、好みに合わせた美容アドバイスを提供します。"
              },
              {
                title: "トレンド提案",
                description: "最新の美容トレンドとあなたの個性を組み合わせた、オリジナルのスタイル提案を受け取れます。"
              }
            ].map((feature, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 2.5,
                    transition: 'all 0.4s ease',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'none',
                    border: '1px solid',
                    borderColor: 'grey.200',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '30%',
                      backgroundColor: 'primary.light',
                      transition: 'height 0.3s ease'
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.07)',
                      '&::before': {
                        height: '100%'
                      }
                    }
                  }}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ 
                      color: 'primary.dark', 
                      mb: 2.5,
                      fontWeight: 500,
                      position: 'relative',
                      zIndex: 1
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography 
                    variant="body2"
                    sx={{ 
                      position: 'relative',
                      zIndex: 1,
                      color: 'text.secondary',
                      lineHeight: 1.7
                    }}
                  >
                    {feature.description}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}