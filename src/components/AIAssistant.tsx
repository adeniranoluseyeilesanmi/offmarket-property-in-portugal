
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
      content: "Hello! I'm your AI assistant for sourcing properties in the Portuguese market. I can help you find off-market properties, analyze potential deals, connect with owners, and provide insights on seller financing and the Portuguese real estate market. How can I help you today?"
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
        "I've identified 3 properties in Lisbon and Porto with seller financing available. Rates between 3.8-5.2% with down payments of 15-30%. The Portuguese market shows rental yields of 4-6% annually. Would you like me to analyze the potential ROI?",
        "I can help draft a personalized message to the owner in Cascais. They seem motivated to sell due to emigration to Brazil. Seller financing with 25% down payment could be negotiated to 20% considering the current Portuguese market conditions.",
        "The Portuguese real estate market has grown 12% annually in premium locations. Based on comparable sales in the Algarve, renovation could yield 20-25% profit, especially with the D7 visa driving international demand and flexible financing options.",
        "I've analyzed the owner's situation - they need a quick sale due to relocation to Germany. Portuguese law allows flexible negotiation terms for seller financing. Would you like me to suggest strategies based on similar seller finance transactions?",
        "Properties in this Northern Portugal region benefit from tax incentives for interior renovation. Average time to sell off-market properties is 18 days, with strong demand from both domestic and international buyers. Seller financing accelerates the process.",
        "Seller financing in Portugal requires specific contracts (purchase and sale with deferred payment). IMI tax is not affected, but requires notary involvement. Golden Visa is compatible with seller finance. Would you like details on the legal aspects?",
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
                <CardTitle className="text-base font-medium">AI Assistant - Portugal</CardTitle>
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
                placeholder="Ask about property sourcing and financing..."
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
