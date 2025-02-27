'use client';

import { Box, Typography, Button, Container, Paper, Grid } from '@mui/material';
// import Image from 'next/image';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              className="fade-in"
              sx={{ 
                fontWeight: 'bold',
                color: 'primary.main',
                mb: 2
              }}
            >
              BeautyGenius
            </Typography>
            <Typography 
              variant="h4" 
              component="h2" 
              gutterBottom
              className="fade-in"
              sx={{ mb: 3 }}
            >
              AIであなただけの<br />美容専門家
            </Typography>
            <Typography 
              variant="body1" 
              paragraph
              className="fade-in-up"
              sx={{ mb: 4 }}
            >
              AIテクノロジーを活用し、あなた一人ひとりに合わせたパーソナライズされた美容アドバイスをお届けします。
              顔型分析、肌質診断、トレンドとあなたの好みを組み合わせた、最適な美容提案をぜひ体験してください。
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }} className="fade-in-up">
              <Button 
                variant="contained" 
                size="large"
                color="primary"
              >
                無料で始める
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                color="primary"
              >
                詳しく見る
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper 
              elevation={6}
              sx={{ 
                borderRadius: 4,
                overflow: 'hidden',
                height: 400,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                bgcolor: 'background.paper'
              }}
              className="fade-in"
            >
              <Typography variant="h5" color="text.secondary">
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

        <Box sx={{ mt: 8, mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h2" 
            gutterBottom 
            textAlign="center"
            sx={{ mb: 6 }}
          >
            主な機能
          </Typography>
          <Grid container spacing={4}>
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
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)'
                    }
                  }}
                  elevation={2}
                >
                  <Typography
                    variant="h5"
                    component="h3"
                    gutterBottom
                    sx={{ color: 'primary.main', mb: 2 }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography variant="body2">
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
