import React, { useState, useRef, useEffect } from 'react';
import { Card } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { Send, Sparkles, Bot, User, Star, Zap, Brain, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Chat = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'ai',
      content: 'নমস্কার! আমি নায় সাথী এআই। আপনার আইনি প্রশ্ন বা সহায়তার জন্য আমি এখানে আছি। আপনি কিভাবে সাহায্য করতে পারি?',
      timestamp: new Date(Date.now() - 2000)
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const mockAIResponses = [
    'আপনার প্রশ্নটি খুবই গুরুত্বপূর্ণ। বাংলাদেশের আইন অনুযায়ী, এই বিষয়ে আপনার অধিকার রয়েছে। আরো বিস্তারিত জানতে স্থানীয় আইনজীবীর সাথে যোগাযোগ করুন।',
    'এই ধরনের আইনি সমস্যার জন্য আপনি আদালতে আবেদন করতে পারেন। প্রয়োজনীয় ডকুমেন্ট প্রস্তুত করে উপযুক্ত আইনি পরামর্শ নিন।',
    'আপনার অধিকার রক্ষার জন্য সংবিধানের ২৭ ধারা অনুযায়ী আইনের দৃষ্টিতে সবাই সমান। এই ক্ষেত্রে আপনি আইনি সহায়তা নিতে পারেন।',
    'এই বিষয়ে সরকারি আইনি সহায়তা কার্যক্রম রয়েছে। বিনামূল্যে আইনি পরামর্শের জন্য জাতীয় আইনি সহায়তা সংস্থায় যোগাযোগ করুন।'
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: Date.now() + 1,
        type: 'ai',
        content: mockAIResponses[Math.floor(Math.random() * mockAIResponses.length)],
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickQuestions = [
    'আমার অধিকার কি?',
    'আইনি সহায়তা কিভাবে পাবো?',
    'আদালতে কিভাবে মামলা করব?',
    'বিনামূল্যে আইনজীবী পাওয়া যায়?'
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shapes">
          <div className="w-64 h-64 bg-gradient-to-r from-primary-400/20 to-secondary-400/20 rounded-full blur-3xl animate-float-slow" 
               style={{top: '10%', left: '80%'}}></div>
          <div className="w-96 h-96 bg-gradient-to-r from-accent-400/15 to-primary-400/15 rounded-full blur-3xl animate-float-reverse" 
               style={{top: '60%', left: '10%'}}></div>
          <div className="w-48 h-48 bg-gradient-to-r from-secondary-400/25 to-accent-400/25 rounded-full blur-2xl animate-float" 
               style={{top: '30%', right: '20%'}}></div>
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/10 backdrop-blur-xl border-b border-white/20"
        >
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                  নায় সাথী AI
                </h1>
                <p className="text-sm text-gray-600">Powered by Gemini • সর্বদা সহায়তায় প্রস্তুত</p>
              </div>
              <div className="ml-auto flex gap-2">
                <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  Online
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Chat Messages */}
        <div className="flex-1 max-w-4xl mx-auto w-full px-4 py-6 overflow-hidden">
          <div className="h-[calc(100vh-280px)] overflow-y-auto scrollbar-hide space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className={`flex gap-3 ${message.type === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.type === 'ai' 
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500' 
                      : 'bg-gradient-to-r from-accent-500 to-primary-500'
                  }`}>
                    {message.type === 'ai' ? (
                      <Bot className="w-5 h-5 text-white" />
                    ) : (
                      <User className="w-5 h-5 text-white" />
                    )}
                  </div>
                  
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'text-right' : ''}`}>
                    <Card variant={message.type === 'ai' ? 'glass' : 'gradient1'} 
                          className={`p-4 ${message.type === 'user' ? 'bg-gradient-to-r from-accent-500 to-primary-500 text-white' : ''}`}>
                      <p className={`text-sm leading-relaxed ${message.type === 'user' ? 'text-white' : 'text-gray-700'}`}>
                        {message.content}
                      </p>
                      <p className={`text-xs mt-2 ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                        {message.timestamp.toLocaleTimeString('bn-BD')}
                      </p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {/* Typing Indicator */}
            <AnimatePresence>
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="flex gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <Card variant="glass" className="p-4">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
                      <div className="w-2 h-2 bg-primary-500 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
                    </div>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Questions */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-4"
          >
            <p className="text-sm text-gray-600 mb-2 font-medium">দ্রুত প্রশ্ন:</p>
            <div className="flex flex-wrap gap-2">
              {quickQuestions.map((question, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputMessage(question)}
                  className="text-xs bg-white/60 backdrop-blur-sm hover:bg-white/80 border-white/30 hover:scale-105 transition-all duration-200"
                >
                  {question}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Input Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card variant="glass" className="p-4">
              <div className="flex gap-3">
                <div className="flex-1 relative">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="আপনার আইনি প্রশ্ন লিখুন..."
                    className="pr-12 bg-white/50 border-white/30 focus:bg-white/70 transition-all duration-200"
                    disabled={isTyping}
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex gap-1">
                    <Zap className="w-4 h-4 text-primary-500" />
                    <Brain className="w-4 h-4 text-secondary-500" />
                  </div>
                </div>
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  variant="vibrant1"
                  className="px-6 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Button>
              </div>
              
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    AI Powered
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3 text-blue-500" />
                    Real-time Response
                  </span>
                </div>
                <span>Enter দিয়ে পাঠান</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
