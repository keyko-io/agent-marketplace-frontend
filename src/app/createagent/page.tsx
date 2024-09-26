"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { PlusCircle, X, Upload, Trash2 } from "lucide-react"

export default function CreateAgentPage() {
  const [tags, setTags] = useState<string[]>([
    "Productivity",
    "AI",
    "Translation",
  ])
  const [newTag, setNewTag] = useState("")
  const [inputs, setInputs] = useState([
    {
      name: "Input 1",
      type: "Text",
      description: "Input Description",
      required: false,
    },
    {
      name: "Input 2",
      type: "Number",
      description: "Input Description",
      required: false,
    },
    {
      name: "Input 3",
      type: "Dropdown",
      description: "Input Description",
      required: false,
      options:
        '"option1": "value1",\n"option2": "value2",\n"option3": "value3"',
    },
  ])
  const [outputs, setOutputs] = useState([
    { name: "Output 1", type: "Text", description: "Output Description" },
    { name: "Output 2", type: "Image", description: "Output Description" },
  ])

  const addTag = () => {
    if (newTag && !tags.includes(newTag)) {
      setTags([...tags, newTag])
      setNewTag("")
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const addInput = () => {
    setInputs([
      ...inputs,
      { name: "", type: "Text", description: "", required: false },
    ])
  }

  const removeInput = (index: number) => {
    setInputs(inputs.filter((_, i) => i !== index))
  }

  const addOutput = () => {
    setOutputs([...outputs, { name: "", type: "Text", description: "" }])
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Agent Details</h1>

        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <Label className="block text-sm font-medium text-gray-400 mb-2">
                  Image
                </Label>
                <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center h-[140px] flex flex-col items-center justify-center">
                  <Upload className="h-10 w-10 text-gray-400 mb-2" />
                  <p className="text-sm text-gray-400">Upload an image</p>
                  <p className="text-xs text-gray-500">
                    PNG, JPG, GIF up to 5MB
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label
                    htmlFor="agent-name"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Name
                  </Label>
                  <Input
                    id="agent-name"
                    placeholder="Your agent's name"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label
                    htmlFor="agent-type"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Type
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="text">Text Generation</SelectItem>
                      <SelectItem value="image">Image Generation</SelectItem>
                      <SelectItem value="audio">Audio Processing</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="agent-category"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Category
                  </Label>
                  <Select>
                    <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="productivity">Productivity</SelectItem>
                      <SelectItem value="creativity">Creativity</SelectItem>
                      <SelectItem value="analysis">Analysis</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label
                    htmlFor="agent-subtitle"
                    className="block text-sm font-medium text-gray-400 mb-2"
                  >
                    Subtitle
                  </Label>
                  <Input
                    id="agent-subtitle"
                    placeholder="A subtitle for your agent"
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>

              <div>
                <Label className="block text-sm font-medium text-gray-400 mb-2">
                  Tags
                </Label>
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags.map((tag) => (
                    <Badge key={tag}>
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-xs"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <Input
                    placeholder="Add a tag"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                  <Button onClick={addTag} variant="outline">
                    Add
                  </Button>
                </div>
              </div>

              <div>
                <Label
                  htmlFor="agent-description"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Description
                </Label>
                <Textarea
                  id="agent-description"
                  placeholder="Describe what your agent does"
                  className="bg-gray-700 border-gray-600 text-white"
                  rows={4}
                />
              </div>

              <div>
                <Label
                  htmlFor="agent-features"
                  className="block text-sm font-medium text-gray-400 mb-2"
                >
                  Key Features
                </Label>
                <Textarea
                  id="agent-features"
                  placeholder="Describe what features make your agent special"
                  className="bg-gray-700 border-gray-600 text-white"
                  rows={4}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        <h2 className="text-2xl font-bold mb-4">Inputs</h2>
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <Textarea
              placeholder="Describe what kind of input the process expects"
              className="bg-gray-700 border-gray-600 text-white mb-4"
              rows={2}
            />
            {inputs.map((input, index) => (
              <div
                key={index}
                className="mb-6 pb-6 border-b border-gray-700 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label className="text-gray-400">Name</Label>
                    <Input
                      value={input.name}
                      onChange={(e) => {
                        const newInputs = [...inputs]
                        newInputs[index].name = e.target.value
                        setInputs(newInputs)
                      }}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-400">Type</Label>
                    <Select
                      value={input.type}
                      onValueChange={(value) => {
                        const newInputs = [...inputs]
                        newInputs[index].type = value
                        setInputs(newInputs)
                      }}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Text">Text</SelectItem>
                        <SelectItem value="Number">Number</SelectItem>
                        <SelectItem value="Dropdown">Dropdown</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Checkbox
                        id={`required-${index}`}
                        checked={input.required}
                        onCheckedChange={(checked) => {
                          const newInputs = [...inputs]
                          newInputs[index].required = checked as boolean
                          setInputs(newInputs)
                        }}
                      />
                      <Label
                        htmlFor={`required-${index}`}
                        className="ml-2 text-gray-400"
                      >
                        Required
                      </Label>
                    </div>
                    <Button
                      variant="destructive"
                      size="icon"
                      onClick={() => removeInput(index)}
                      className="h-8 w-8"
                    >
                      <Trash2 className="h-4 w-4" />
                      <span className="sr-only">Remove input</span>
                    </Button>
                  </div>
                </div>
                <div className="mb-4">
                  <Label className="text-gray-400">Description</Label>
                  <Input
                    value={input.description}
                    onChange={(e) => {
                      const newInputs = [...inputs]
                      newInputs[index].description = e.target.value
                      setInputs(newInputs)
                    }}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
                {input.type === "Dropdown" && (
                  <div>
                    <Label className="text-gray-400">Dropdown options</Label>
                    <Textarea
                      value={input.options}
                      onChange={(e) => {
                        const newInputs = [...inputs]
                        newInputs[index].options = e.target.value
                        setInputs(newInputs)
                      }}
                      className="bg-gray-700 border-gray-600 text-white"
                      rows={3}
                    />
                  </div>
                )}
              </div>
            ))}
            <Button onClick={addInput} variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Input
            </Button>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Agent Process</h2>
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <div className="mb-4">
              <Label className="text-gray-400">Description</Label>
              <Textarea
                placeholder="Describe how your agent will use the inputs"
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
              />
            </div>
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <Label className="text-gray-400">Runtime</Label>
                <Select>
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue placeholder="Select runtime" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="python">Python 3.9</SelectItem>
                    <SelectItem value="nodejs">Node.js 14</SelectItem>
                    <SelectItem value="ruby">Ruby 3.0</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label className="text-gray-400">Entry point</Label>
                <Input
                  placeholder="e.g., main.py"
                  className="bg-gray-700 border-gray-600 text-white"
                />
              </div>
            </div>
            <div className="mb-6">
              <Label className="text-gray-400">Environment variables</Label>
              <Textarea
                placeholder="KEY=value"
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
              />
            </div>
            <div className="mb-6">
              <Label className="text-gray-400">Dependencies</Label>
              <Textarea
                placeholder="package==1.0.0"
                className="bg-gray-700 border-gray-600 text-white"
                rows={3}
              />
            </div>
            <div>
              <Label className="text-gray-400">Attach source code</Label>
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-2 text-sm text-gray-400">
                  Upload a zip file or drag and drop
                </p>
                <p className="text-xs text-gray-500">ZIP up to 50MB</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl font-bold mb-4">Outputs</h2>
        <Card className="bg-gray-800 border-gray-700 mb-8">
          <CardContent className="p-6">
            <Textarea
              placeholder="Describe what kind of output the process will generate"
              className="bg-gray-700 border-gray-600 text-white mb-4"
              rows={2}
            />
            {outputs.map((output, index) => (
              <div
                key={index}
                className="mb-6 pb-6 border-b border-gray-700 last:border-b-0 last:pb-0 last:mb-0"
              >
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label className="text-gray-400">Name</Label>
                    <Input
                      value={output.name}
                      onChange={(e) => {
                        const newOutputs = [...outputs]
                        newOutputs[index].name = e.target.value
                        setOutputs(newOutputs)
                      }}
                      className="bg-gray-700 border-gray-600 text-white"
                    />
                  </div>
                  <div>
                    <Label className="text-gray-400">Type</Label>
                    <Select
                      value={output.type}
                      onValueChange={(value) => {
                        const newOutputs = [...outputs]
                        newOutputs[index].type = value
                        setOutputs(newOutputs)
                      }}
                    >
                      <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Text">Text</SelectItem>
                        <SelectItem value="Number">Number</SelectItem>
                        <SelectItem value="Image">Image</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label className="text-gray-400">Description</Label>
                  <Input
                    value={output.description}
                    onChange={(e) => {
                      const newOutputs = [...outputs]
                      newOutputs[index].description = e.target.value
                      setOutputs(newOutputs)
                    }}
                    className="bg-gray-700 border-gray-600 text-white"
                  />
                </div>
              </div>
            ))}
            <Button onClick={addOutput} variant="outline" className="mt-4">
              <PlusCircle className="mr-2 h-4 w-4" />
              Add Output
            </Button>
          </CardContent>
        </Card>

        <Button className="w-full ">Upload Agent</Button>
      </div>
    </div>
  )
}
