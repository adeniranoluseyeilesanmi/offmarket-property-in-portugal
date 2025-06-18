
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Bot, SendIcon, Sparkles, X } from "lucide-react";
import { cn } from "@/lib/utils";

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [conversation, setConversation] = useState<{role: string, content: string}[]>([
    {
      role: "assistant",
      content: "Olá! I'm your AI property sourcing assistant for the Portuguese market. I can help you find off-market properties, analyze potential deals, connect with property owners, and provide market insights across Portugal. Como posso ajudar hoje?"
    }
  ]);

  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    // Add user message to conversation
    const userMessage = { role: "user", content: input };
    setConversation([...conversation, userMessage]);
    setInput("");
    
    // Simulate AI thinking
    setIsThinking(true);
    
    // Simulate AI response after a delay
    setTimeout(() => {
      const aiResponses = [
        "Based on your criteria, I've identified 5 potential off-market properties in Lisbon and Porto that match your investment goals. The Portuguese market shows strong rental yields of 4-6% annually. Shall I analyze their ROI potential?",
        "I can help you draft a personalized message to the property owner in Cascais. They appear motivated to sell due to emigration to Brazil. Consider making an offer 8-12% below asking price, which is typical for off-market deals in Portugal.",
        "The Portuguese property market has seen 12% annual growth in prime locations. Based on comparable sales in this area of the Algarve, renovation could yield a 20-25% profit margin, especially with the D7 visa driving international demand.",
        "I've analyzed the owner's situation - they need a quick sale due to business relocation to Germany. Portuguese property law allows for flexible negotiation terms. Would you like me to suggest negotiation strategies based on similar transactions?",
        "Properties in this region of Northern Portugal benefit from the interior renovation tax incentives. Average time to sell off-market properties here is 18 days, with strong demand from both domestic and international buyers.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      setConversation(prev => [...prev, { 
        role: "assistant", 
        content: randomResponse
      }]);
      
      setIsThinking(false);
    }, 1500);
  };

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 h-14 w-14 rounded-full shadow-lg z-50 bg-property-blue hover:bg-property-dark-blue"
        >
          <Bot size={24} />
        </Button>
      )}

      {/* Chat window */}
      {isOpen && (
        <Card className="fixed bottom-4 right-4 w-[350px] sm:w-[400px] max-h-[500px] shadow-xl z-50 flex flex-col">
          <CardHeader className="bg-property-blue text-white py-3 px-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <Sparkles size={18} className="mr-2" />
                <CardTitle className="text-base font-medium">AI Property Assistant - Portugal</CardTitle>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-6 w-6 text-white hover:bg-property-dark-blue"
                onClick={() => setIsOpen(false)}
              >
                <X size={16} />
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[320px]">
            {conversation.map((message, index) => (
              <div 
                key={index}
                className={cn(
                  "flex",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                <div 
                  className={cn(
                    "rounded-lg py-2 px-3 max-w-[80%]",
                    message.role === "user" 
                      ? "bg-property-blue text-white" 
                      : "bg-gray-100 text-gray-800"
                  )}
                >
                  {message.content}
                </div>
              </div>
            ))}
            
            {isThinking && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg py-2 px-3">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-75"></div>
                    <div className="h-2 w-2 bg-gray-400 rounded-full animate-pulse delay-150"></div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="p-3 border-t">
            <div className="flex w-full items-center space-x-2">
              <Textarea 
                placeholder="Ask anything about property sourcing..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="min-h-[40px] resize-none"
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage();
                  }
                }}
              />
              <Button 
                size="icon" 
                onClick={handleSendMessage}
                disabled={!input.trim() || isThinking}
              >
                <SendIcon size={18} />
              </Button>
            </div>
          </CardFooter>
        </Card>
      )}
    </>
  );
};

export default AIAssistant;
