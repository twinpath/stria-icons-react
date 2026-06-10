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
var FolderMagnifyingGlass_exports = {};
__export(FolderMagnifyingGlass_exports, {
  default: () => FolderMagnifyingGlass_default
});
module.exports = __toCommonJS(FolderMagnifyingGlass_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FolderMagnifyingGlassDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272 216C241.121 216 216 241.121 216 272S241.121 328 272 328S328 302.879 328 272S302.879 216 272 216ZM496 96H304L240 32H80C53.5 32 32 53.5 32 80V432C32 458.5 53.5 480 80 480H496C522.5 480 544 458.5 544 432V144C544 117.5 522.5 96 496 96ZM411.314 400.004L400.004 411.313C393.756 417.563 383.625 417.563 377.377 411.313L325.254 360.895C309.631 370.277 291.551 376 272 376C214.562 376 168 329.438 168 272S214.562 168 272 168S376 214.562 376 272C376 292.445 369.889 311.375 359.701 327.453L411.314 377.375C417.562 383.625 417.562 393.758 411.314 400.004Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M411.314 377.375L359.701 327.453C369.889 311.375 376 292.445 376 272C376 214.562 329.438 168 272 168S168 214.562 168 272S214.562 376 272 376C291.551 376 309.631 370.277 325.254 360.895L377.377 411.312C383.625 417.562 393.756 417.562 400.004 411.312L411.314 400.004C417.562 393.758 417.562 383.625 411.314 377.375ZM272 328C241.121 328 216 302.879 216 272S241.121 216 272 216S328 241.121 328 272S302.879 328 272 328Z" })
    ]
  }
));
FolderMagnifyingGlassDuotone.displayName = "FolderMagnifyingGlassDuotone";
var FolderMagnifyingGlass_default = FolderMagnifyingGlassDuotone;
