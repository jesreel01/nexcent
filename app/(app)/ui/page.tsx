import Button from "@/components/button";
import IconButton from "@/components/icon-button";
import { Mail } from "lucide-react";

export default function IndexPage() {
  return (
    <div className="container">
      <p>Main Colors</p>
      <div className="flex space-x-2">
        <div className="bg-primary w-10 h-10"></div>
        <div className="bg-secondary w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
      </div>
      <p>Neutral Colors</p>
      <div className="flex space-x-2">
        <div className="bg-neutral-black w-10 h-10"></div>
        <div className="bg-secondary w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
        <div className="bg-info w-10 h-10"></div>
      </div>
      Sample Home Page
      <h1 className="text-h1">Headline 1</h1>
      <h2 className="text-h2">Headline 2</h2>
      <h3 className="text-h3">Headline 3</h3>
      <h4 className="text-h4">Headline 4</h4>
      {/* <p className="text-body-4">Sample text</p> */}
      <p className="text-body-4 font-normal">Sample text</p>
      <p className="text-body-m-4 font-bold">Sample text</p>
      <br />
      <p>Primary</p>
      <div className="flex space-x-2">
        <Button variant="primary" size="small">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="primary" size="medium">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="primary" size="large">
          Large
        </Button>
        <Button variant="primary" size="medium" disabled>
          Medium
        </Button>
      </div>
      <p>Secondary</p>
      <div className="flex space-x-2">
        <Button variant="secondary" size="small">
          Login with Email <Mail className="ml-2 h-4 w-4" />
        </Button>
        <Button variant="secondary" size="medium">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="secondary" size="large">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="secondary" size="medium" disabled>
          Medium
        </Button>
      </div>
      <p>Tertiary</p>
      <div className="flex space-x-2">
        <Button variant="tertiary" size="small">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="tertiary" size="medium">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="tertiary" size="large">
          <Mail className="mr-2 h-4 w-4" /> Login with Email
        </Button>
        <Button variant="tertiary" size="medium" disabled>
          Medium
        </Button>
      </div>
      <br />
      <p>Icon Button Primary</p>
      <div className="flex space-x-2">
        <IconButton variant="primary" size="small">
          <Mail className="h-4 w-4" />
        </IconButton>
        <IconButton variant="primary" size="medium">
          <Mail className="h-5 w-5" />
        </IconButton>
        <IconButton variant="primary" size="large">
          <Mail className="h-6 w-6" />
        </IconButton>
      </div>
      <p>Icon Button Secondary</p>
      <div className="flex space-x-2">
        <IconButton variant="secondary" size="small">
          <Mail className="h-4 w-4" />
        </IconButton>
        <IconButton variant="secondary" size="medium">
          <Mail className="h-5 w-5" />
        </IconButton>
        <IconButton variant="secondary" size="large">
          <Mail className="h-6 w-6" />
        </IconButton>
      </div>
      <p>Icon Button Tertiary</p>
      <div className="flex space-x-2">
        <IconButton variant="tertiary" size="small">
          <Mail className="h-4 w-4" />
        </IconButton>
        <IconButton variant="tertiary" size="medium">
          <Mail className="h-5 w-5" />
        </IconButton>
        <IconButton variant="tertiary" size="large">
          <Mail className="h-6 w-6" />
        </IconButton>
      </div>
      </div>
  );
}
