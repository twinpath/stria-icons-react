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
var ChevronsRight_exports = {};
__export(ChevronsRight_exports, {
  default: () => ChevronsRight_default
});
module.exports = __toCommonJS(ChevronsRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChevronsRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256.009 256C256.009 246.047 252.322 236.078 244.916 228.344L68.923 44.344C53.642 28.391 28.332 27.828 12.363 43.094C-3.604 58.359 -4.166 83.688 11.113 99.656L160.669 256L11.113 412.344C-4.135 428.312 -3.666 453.641 12.363 468.906C28.332 484.172 53.642 483.609 68.923 467.656L244.916 283.656C252.322 275.922 256.009 265.953 256.009 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M436.904 228.344L260.912 44.344C245.632 28.391 220.32 27.828 204.353 43.094C188.384 58.359 187.853 83.688 203.103 99.656L352.658 256L203.103 412.344C187.853 428.312 188.353 453.641 204.353 468.906C220.32 484.172 245.632 483.609 260.912 467.656L436.904 283.656C444.31 275.922 447.997 265.953 447.997 256S444.31 236.078 436.904 228.344Z" })
    ]
  }
));
ChevronsRightDuotone.displayName = "ChevronsRightDuotone";
var ChevronsRight_default = ChevronsRightDuotone;
