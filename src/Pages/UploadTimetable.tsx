import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, FileText, Image, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";

const UploadTimetable = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" onClick={() => window.location.href = '/dashboard'} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Dashboard
        </Button>
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Upload Your Timetable</CardTitle>
              <p className="text-muted-foreground">
                Upload your college schedule via Excel, image, or manual entry
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-6 text-center border-dashed hover:bg-muted/50 cursor-pointer transition-colors">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Excel File</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Upload your timetable spreadsheet
                  </p>
                  <Input type="file" accept=".xlsx,.xls,.csv" className="hidden" id="excel-upload" />
                  <Label htmlFor="excel-upload">
                    <Button variant="outline" asChild>
                      <span>Choose File</span>
                    </Button>
                  </Label>
                </Card>

                <Card className="p-6 text-center border-dashed hover:bg-muted/50 cursor-pointer transition-colors">
                  <Image className="h-12 w-12 text-accent mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">Image Upload</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Take a photo of your schedule
                  </p>
                  <Input type="file" accept="image/*" className="hidden" id="image-upload" />
                  <Label htmlFor="image-upload">
                    <Button variant="outline" asChild>
                      <span>Choose Image</span>
                    </Button>
                  </Label>
                </Card>
              </div>

              <div className="text-center">
                <p className="text-muted-foreground mb-4">Or</p>
                <Button variant="hero" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Manual Entry
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default UploadTimetable;