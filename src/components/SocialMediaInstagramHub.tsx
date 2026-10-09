import React, { useState } from 'react';
import { SOCIAL_MEDIA_POSTS, SOCIAL_PERFORMANCE_STATS } from '../data/socialMediaData';
import { SocialMediaPost } from '../types';
import { 
  Instagram, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  MessageCircle, 
  Share2, 
  Bookmark, 
  TrendingUp, 
  Sparkles, 
  CheckCircle2, 
  Users, 
  Flame, 
  Tv, 
  Layers, 
  Copy, 
  Check, 
  ArrowRight,
  ShieldCheck,
  Video,
  Radio
} from 'lucide-react';

interface SocialMediaInstagramHubProps {
  onOpenBooking: () => void;
  onOpenAudit: () => void;
}

export const SocialMediaInstagramHub: React.FC<SocialMediaInstagramHubProps> = ({
  onOpenBooking,
  onOpenAudit
}) => {
  const [selectedPost, setSelectedPost] = useState<SocialMediaPost>(SOCIAL_MEDIA_POSTS[0]);
  const [activePlatformFilter, setActivePlatformFilter] = useState<string>('all');
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(true);
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [copiedHook, setCopiedHook] = useState<string | null>(null);

  const filteredPosts紧 = activePlatformFilter === 'all' 
    ? SOCIAL_MEDIA_POSTS 
    : SOCIAL_MEDIA_POSTS.filter(p => p.platform === activePlatformFilter);

  const toggleLike = (postId: string) => {
    setLikedPosts(prev => ({ ...prev, [postId]: !prev[postId] }));
  };

  const copyHookText = (hook: string) => {
    navigator.clipboard.writeText(hook);
    setCopiedHook(hook);
    setTimeout(() => setCopiedHook(null), 2000);
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden bg-[#F5FAFD]">
      
      {/* Ambient Background Effects */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#078CCB]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-96 h-96 bg-[#09B5E5]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAF5FB] border border-[#078CCB]/30 text-[#07579D] text-xs font-semibold uppercase tracking-wider shadow-sm">
            <Instagram className="w-3.5 h-3.5 text-[#078CCB]" />
            Social Media, Instagram & Viral Promotion Lab
          </div>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-[#031A3D] tracking-tight">
            Viral Creative Production & Organic Social Growth
          </h1>
          <p className="text-base sm:text-lg text-[#475569]">
            We script, shoot, and scale 40+ high-retention Instagram Reels, TikTok Spark campaigns, and influencer seeding activations per month to generate massive brand reach and direct sales.
          </p>
        </div>

        {/* Aggregate Performance Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Total Viral Views</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#07579D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.totalViralImpressions}
            </div>
            <div className="text-[10px] text-[#078CCB] font-mono mt-0.5 font-semibold">+420% Organic Lift</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Avg Engagement</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.averageEngagementRate}
            </div>
            <div className="text-[10px] text-[#07579D] font-mono mt-0.5">3.2x Industry Standard</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Creator Network</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.vettedCreatorNetwork}
            </div>
            <div className="text-[10px] text-[#078CCB] font-mono mt-0.5">Direct-Response Vetted</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Weekly Hooks</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.weeklyHookVariationsProduced}
            </div>
            <div className="text-[10px] text-[#07579D] font-mono mt-0.5">Rapid Creative Iteration</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Thumb-Stop (3s)</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#031A3D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.averageThumbStopRate}
            </div>
            <div className="text-[10px] text-[#078CCB] font-mono mt-0.5 font-semibold">High Retention Hooks</div>
          </div>

          <div className="p-4 rounded-2xl bg-white border border-[#DCEAF3] shadow-sm text-center">
            <div className="text-[11px] font-bold uppercase text-[#8295A8]">Social Ads ROAS</div>
            <div className="text-xl sm:text-2xl font-display font-extrabold text-[#07579D] mt-1">
              {SOCIAL_PERFORMANCE_STATS.roasFromSocialAds}
            </div>
            <div className="text-[10px] text-[#8295A8] font-mono mt-0.5">Blended Return</div>
          </div>
        </div>

        {/* Interactive Reel Stage & Social Studio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Interactive Simulated Smartphone Video Reel Player */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-[360px] bg-[#031A3D] border-4 border-[#07579D] rounded-[40px] shadow-2xl overflow-hidden relative p-3">
              
              {/* Dynamic Island / Speaker Notch */}
              <div className="w-28 h-4 bg-[#031A3D] rounded-full mx-auto mb-2 flex items-center justify-center border border-white/10">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-700 mr-2" />
                <div className="w-2 h-2 rounded-full bg-slate-600" />
              </div>

              {/* Reel Screen Container */}
              <div className="relative aspect-[9/16] rounded-[28px] overflow-hidden bg-slate-950 border border-slate-800 group">
                <img
                  src={selectedPost.mediaUrl}
                  alt={selectedPost.hookHeadline}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#031A3D]/70 via-transparent to-[#031A3D]/95" />

                {/* Top Reel Navigation Bar */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20 text-xs text-white">
                  <div className="flex items-center gap-1.5 font-bold drop-shadow">
                    <Instagram className="w-4 h-4 text-[#09B5E5]" />
                    <span>Reels</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-1.5 rounded-full bg-[#031A3D]/70 backdrop-blur-md text-white border border-white/20 cursor-pointer"
                    >
                      {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#09B5E5]" />}
                    </button>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-full bg-[#031A3D]/70 backdrop-blur-md text-white border border-white/20 cursor-pointer"
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#09B5E5]" />}
                    </button>
                  </div>
                </div>

                {/* Floating Right Interaction Bar */}
                <div className="absolute right-3 bottom-24 flex flex-col items-center gap-4 z-20">
                  
                  {/* Like button */}
                  <button
                    onClick={() => toggleLike(selectedPost.id)}
                    className="flex flex-col items-center gap-0.5 cursor-pointer group"
                  >
                    <div className={`p-2.5 rounded-full backdrop-blur-md border transition-all ${
                      likedPosts[selectedPost.id] 
                        ? 'bg-[#078CCB] border-white text-white scale-110' 
                        : 'bg-[#031A3D]/70 border-white/20 text-white hover:text-[#09B5E5]'
                    }`}>
                      <Heart className={`w-5 h-5 ${likedPosts[selectedPost.id] ? 'fill-white' : ''}`} />
                    </div>
                    <span className="text-[10px] font-bold text-white drop-shadow">
                      {selectedPost.stats.likes}
                    </span>
                  </button>

                  {/* Comment button */}
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="p-2.5 rounded-full bg-[#031A3D]/70 backdrop-blur-md border border-white/20 text-white">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white drop-shadow">
                      {selectedPost.stats.comments}
                    </span>
                  </div>

                  {/* Share button */}
                  <div className="flex flex-col items-center gap-0.5">
                    <div className="p-2.5 rounded-full bg-[#031A3D]/70 backdrop-blur-md border border-white/20 text-white">
                      <Share2 className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-white drop-shadow">
                      {selectedPost.stats.shares}
                    </span>
                  </div>

                  {/* ROAS Badge */}
                  <div className="px-2 py-1 rounded-lg bg-[#07579D]/90 border border-[#09B5E5]/80 text-white text-[10px] font-mono font-bold">
                    {selectedPost.stats.roasMultiplier}
                  </div>
                </div>

                {/* Bottom Overlay: Account & Caption */}
                <div className="absolute bottom-3 left-3 right-16 z-20 space-y-2 text-white">
                  
                  {/* Account Header */}
                  <div className="flex items-center gap-2">
                    <img
                      src={selectedPost.accountAvatar}
                      alt={selectedPost.accountName}
                      className="w-7 h-7 rounded-full object-cover border border-[#078CCB]"
                    />
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-bold">{selectedPost.accountHandle}</span>
                      {selectedPost.verified && <CheckCircle2 className="w-3.5 h-3.5 text-[#09B5E5]" />}
                    </div>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-[#07579D] text-white border border-[#078CCB]">
                      Follow
                    </span>
                  </div>

                  {/* Hook & Caption */}
                  <p className="text-xs text-slate-100 font-semibold line-clamp-2 drop-shadow">
                    {selectedPost.hookHeadline}
                  </p>

                  {/* Product Tag */}
                  <div className="flex items-center gap-1 text-[11px] text-[#09B5E5] font-mono bg-[#031A3D]/80 px-2 py-1 rounded-md border border-[#078CCB]/60 w-fit">
                    <Sparkles className="w-3 h-3 text-[#09B5E5]" />
                    <span>{selectedPost.productFeatured}</span>
                  </div>

                  {/* Audio Track */}
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-300 truncate">
                    <Radio className="w-3 h-3 text-[#09B5E5] animate-pulse" />
                    <span className="truncate">{selectedPost.audioTrack}</span>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* RIGHT: Deep-Dive Creative Strategy & Social Campaigns Grid */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Selected Post Teardown Card */}
            <div className="p-6 rounded-3xl bg-white border border-[#DCEAF3] shadow-md space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#DCEAF3]">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#078CCB]">
                    Active Creative Teardown • {selectedPost.creativePillar}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#031A3D] mt-0.5">
                    {selectedPost.clientBrand}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-xl bg-[#EAF5FB] text-[#07579D] border border-[#078CCB]/30 text-xs font-mono font-bold">
                    ROAS: {selectedPost.stats.roasMultiplier}
                  </span>
                  <span className="px-3 py-1 rounded-xl bg-[#EAF5FB] text-[#078CCB] border border-[#078CCB]/30 text-xs font-mono font-bold">
                    CTR: {selectedPost.stats.ctrRate}
                  </span>
                </div>
              </div>

              {/* Hook Analysis */}
              <div className="p-4 rounded-2xl bg-[#F5FAFD] border border-[#DCEAF3] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-[#8295A8] flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-[#078CCB]" />
                    High-Converting Hook Formula
                  </span>
                  <button
                    onClick={() => copyHookText(selectedPost.hookHeadline)}
                    className="text-[11px] text-[#07579D] hover:text-[#078CCB] flex items-center gap-1 cursor-pointer font-semibold"
                  >
                    {copiedHook === selectedPost.hookHeadline ? (
                      <>
                        <Check className="w-3 h-3 text-[#078CCB]" />
                        <span className="text-[#078CCB] font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Hook</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-sm font-semibold text-[#031A3D] italic">
                  "{selectedPost.hookHeadline}"
                </div>
              </div>

              {/* Full Caption Breakdown */}
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase font-bold text-[#8295A8]">Direct-Response Copy & Hashtags</span>
                <p className="text-xs text-[#475569] leading-relaxed bg-[#F5FAFD] p-3 rounded-xl border border-[#DCEAF3]">
                  {selectedPost.caption}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {selectedPost.hashtags.map((tag, i) => (
                    <span key={i} className="text-[11px] text-[#078CCB] font-mono font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* What Makes It Scale */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] text-xs space-y-1">
                  <div className="font-bold text-[#031A3D] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#078CCB]" />
                    UGC Creator Pairing
                  </div>
                  <p className="text-[#475569] text-[11px]">
                    Matched with authentic creators matching the exact buyer demographic to eliminate ad blindness.
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-[#F5FAFD] border border-[#DCEAF3] text-xs space-y-1">
                  <div className="font-bold text-[#031A3D] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#07579D]" />
                    Algorithmic Dayparting
                  </div>
                  <p className="text-[#475569] text-[11px]">
                    Scaled during peak engagement windows with automated budget boosters on top-performing hooks.
                  </p>
                </div>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={onOpenBooking}
                  className="py-2.5 px-5 rounded-xl bg-gradient-to-r from-[#07579D] via-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-xs shadow-lg shadow-[#078CCB]/25 flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Deploy 40+ Creative Hooks For My Brand</span>
                </button>
              </div>
            </div>

            {/* Campaign Selection Carousel */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-display text-sm font-bold text-[#031A3D] uppercase tracking-wider">
                  Select Viral Ad Reel To Inspect
                </h4>
                <span className="text-xs text-[#8295A8] font-mono">
                  {SOCIAL_MEDIA_POSTS.length} Live Ad Variations
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {SOCIAL_MEDIA_POSTS.map((post) => (
                  <button
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className={`p-3 rounded-2xl text-left border transition-all cursor-pointer flex flex-col justify-between ${
                      selectedPost.id === post.id
                        ? 'bg-[#EAF5FB] border-[#078CCB] ring-1 ring-[#078CCB] shadow-md shadow-[#078CCB]/10'
                        : 'bg-white border-[#DCEAF3] hover:border-[#078CCB]/40 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#F5FAFD] text-[#07579D] border border-[#DCEAF3]">
                        {post.platform.toUpperCase()}
                      </span>
                      <span className="text-[10px] font-bold text-[#07579D]">
                        {post.stats.roasMultiplier}
                      </span>
                    </div>

                    <div className="text-xs font-bold text-[#031A3D] truncate mb-1">
                      {post.clientBrand}
                    </div>

                    <div className="text-[11px] text-[#475569] line-clamp-2">
                      {post.hookHeadline}
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Creator Network & Production Services Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#031A3D] via-[#07579D] to-[#031A3D] border border-[#078CCB]/30 text-center space-y-4 shadow-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white text-xs font-semibold uppercase">
            <Users className="w-3.5 h-3.5" />
            1,200+ Creator Global Roster
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
            Need High-Velocity Instagram & TikTok Ad Creative That Converts?
          </h3>
          <p className="text-slate-200 text-sm max-w-2xl mx-auto">
            Our in-house studio handles creator outreach, contracts, scriptwriting, editing, 3D motion overlays, and iterative hook variation testing with zero friction.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#078CCB] to-[#09B5E5] hover:brightness-110 text-white font-bold text-sm shadow-xl shadow-[#078CCB]/25 inline-flex items-center gap-2 cursor-pointer transition-all"
            >
              <Sparkles className="w-4 h-4 text-white" />
              <span>Book Creative Lab Consultation</span>
            </button>
            <button
              onClick={onOpenAudit}
              className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold cursor-pointer transition-all"
            >
              Get Free Social Ad Audit
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
