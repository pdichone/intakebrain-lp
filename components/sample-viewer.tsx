"use client";

import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface SampleViewerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function SampleViewer({ open, onOpenChange }: SampleViewerProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0 overflow-hidden">
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b bg-gray-light">
            <h3 className="font-semibold text-navy">Sample Case Summary</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onOpenChange(false)}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </Button>
          </div>

          {/* PDF Viewer */}
          <div className="flex-1 bg-gray-200">
            <iframe
              src="/images/case-Personal-Injury-7e448456.pdf"
              className="w-full h-full"
              title="Sample Case Summary PDF"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
