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
var SnowmanHead_exports = {};
__export(SnowmanHead_exports, {
  default: () => SnowmanHead_default
});
module.exports = __toCommonJS(SnowmanHead_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SnowmanHeadDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390.066 256H58.385C41.865 284.266 32 316.883 32 352C32 409.277 57.107 460.656 96.895 495.82C108.705 506.262 123.99 512 139.756 512H308.279C323.818 512 338.957 506.492 350.633 496.238C400.354 452.578 427.348 383.688 411.438 309.508C407.334 290.375 399.777 272.531 390.066 256ZM152.023 336C138.65 336 127.953 325.16 127.953 311.93C127.953 298.695 138.791 288 152.023 288C165.256 288 175.953 298.836 175.953 311.93C175.953 325.16 165.115 336 152.023 336ZM224 448C224 448 192 401.75 192 384S206.25 352 224 352S256 366.25 256 384S224 448 224 448ZM295.93 336C282.697 336 272 325.16 272 311.93C272 298.695 282.838 288 295.93 288C309.301 288 319.998 298.836 319.998 311.93C320.139 325.16 309.301 336 295.93 336Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32C384 14.398 369.6 0 352 0H96C78.4 0 64 14.398 64 32V160H384V32ZM432 192H16C7.164 192 0 199.164 0 208C0 234.508 21.49 256 48 256H400C426.51 256 448 234.508 448 208C448 199.164 440.836 192 432 192ZM224 352C206.25 352 192 366.25 192 384S224 448 224 448S256 401.75 256 384S241.75 352 224 352Z" })
    ]
  }
));
SnowmanHeadDuotone.displayName = "SnowmanHeadDuotone";
var SnowmanHead_default = SnowmanHeadDuotone;
