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
var SquareY_exports = {};
__export(SquareY_exports, {
  default: () => SquareY_default
});
module.exports = __toCommonJS(SquareY_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareYDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.348 480 448 451.346 448 416V96C448 60.654 419.348 32 384 32ZM346.219 167.625L248 282.209V360C248 373.25 237.25 384 224 384S200 373.25 200 360V282.209L101.781 167.625C93.156 157.562 94.312 142.406 104.375 133.781C114.453 125.156 129.594 126.344 138.219 136.375L224 236.453L309.781 136.375C318.422 126.328 333.547 125.109 343.625 133.781C353.688 142.406 354.844 157.562 346.219 167.625Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M309.781 136.375L224 236.453L138.219 136.375C129.594 126.344 114.453 125.156 104.375 133.781C94.313 142.406 93.156 157.562 101.781 167.625L200 282.209V360C200 373.25 210.75 384 224 384S248 373.25 248 360V282.209L346.219 167.625C354.844 157.563 353.688 142.406 343.625 133.781C333.547 125.109 318.422 126.328 309.781 136.375Z" })
    ]
  }
));
SquareYDuotone.displayName = "SquareYDuotone";
var SquareY_default = SquareYDuotone;
