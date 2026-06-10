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
const SnowmanHeadSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32C384 14.398 369.602 0 352 0H96C78.398 0 64 14.398 64 32V160H384V32ZM448 208C448 199.164 440.836 192 432 192H16C7.164 192 0 199.164 0 208C0 234.508 21.492 256 48 256H58.383C41.867 284.266 32 316.883 32 352C32 409.277 57.109 460.656 96.895 495.82C108.703 506.262 123.992 512 139.758 512H308.281C323.82 512 338.957 506.492 350.633 496.238C400.352 452.578 427.348 383.688 411.437 309.508C407.336 290.375 399.777 272.531 390.066 256H400C426.508 256 448 234.508 448 208ZM152.023 336C138.648 336 127.953 325.16 127.953 311.93C127.953 298.695 138.789 288 152.023 288S175.953 298.836 175.953 311.93C175.953 325.16 165.117 336 152.023 336ZM224 448C224 448 192 401.75 192 384S206.25 352 224 352S256 366.25 256 384S224 448 224 448ZM295.93 336C282.695 336 272 325.16 272 311.93C272 298.695 282.836 288 295.93 288C309.301 288 320 298.836 320 311.93C320.141 325.16 309.301 336 295.93 336Z" })
  }
));
SnowmanHeadSolid.displayName = "SnowmanHeadSolid";
var SnowmanHead_default = SnowmanHeadSolid;
