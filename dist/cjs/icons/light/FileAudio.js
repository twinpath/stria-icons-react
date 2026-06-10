var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var FileAudio_exports = {};
__export(FileAudio_exports, {
  default: () => FileAudio_default
});
module.exports = __toCommonJS(FileAudio_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FileAudioLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M365.256 125.254L258.746 18.746C246.744 6.742 230.465 0 213.49 0H64C28.654 0 0 28.654 0 64V448C0 483.346 28.654 512 64 512H320C355.348 512 384 483.346 384 448V170.51C384 153.535 377.258 137.258 365.256 125.254ZM224 34.076C228.477 35.643 232.666 37.922 236.119 41.375L342.627 147.879C346.08 151.332 348.357 155.523 349.924 160H240C231.188 160 224 152.828 224 144V34.076ZM352 448C352 465.645 337.645 480 320 480H64C46.355 480 32 465.645 32 448V64C32 46.355 46.355 32 64 32H192V144C192 170.469 213.531 192 240 192H352V448ZM182.781 249.516C177.188 246.891 170.531 247.75 165.75 251.703L122.219 288H80C71.156 288 64 295.156 64 304V368C64 376.844 71.156 384 80 384H122.219L165.75 420.297C168.688 422.734 172.312 424 176 424C178.312 424 180.625 423.5 182.781 422.484C188.406 419.859 192 414.203 192 408V264C192 257.797 188.406 252.141 182.781 249.516ZM160 373.844L138.25 355.703C135.375 353.312 131.75 352 128 352H96V320H128C131.75 320 135.375 318.688 138.25 316.297L160 298.156V373.844ZM288 336C288 367.422 272.625 396.906 246.844 414.875C239.594 419.938 237.812 429.906 242.875 437.156C246 441.609 250.969 444 256 444C259.188 444 262.375 443.062 265.156 441.125C299.5 417.172 320 377.875 320 336S299.5 254.828 265.156 230.875C258 225.891 247.969 227.578 242.875 234.844C237.812 242.094 239.594 252.062 246.844 257.125C272.625 275.094 288 304.578 288 336ZM234.125 287.609C227.281 282.063 217.219 283.016 211.625 289.875C206.031 296.719 207.031 306.797 213.875 312.391C220.219 317.578 224 326.406 224 336S220.219 354.422 213.875 359.609C207.031 365.203 206.031 375.281 211.625 382.125C214.781 386.001 219.375 388 224 388C227.562 388 231.156 386.812 234.125 384.391C247.812 373.188 256 355.094 256 336S247.812 298.812 234.125 287.609Z" })
  }
));
FileAudioLight.displayName = "FileAudioLight";
var FileAudio_default = FileAudioLight;
