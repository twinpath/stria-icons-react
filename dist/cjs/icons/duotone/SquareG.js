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
var SquareG_exports = {};
__export(SquareG_exports, {
  default: () => SquareG_default
});
module.exports = __toCommonJS(SquareG_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareGDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM352 274.906C352 276.359 351.875 277.828 351.594 279.25C347.219 303.078 334.031 326.953 314.5 346.516C290.344 370.688 258.188 384 224 384S157.656 370.688 133.5 346.516C83.594 296.609 83.594 215.391 133.5 165.484C181.406 117.547 261.469 115.312 312 160.609C321.875 169.453 322.719 184.625 313.875 194.5C305 204.438 289.812 205.219 280 196.359C248.094 167.797 197.656 169.172 167.438 199.422C136.25 230.625 136.25 281.375 167.438 312.578C197.625 342.797 250.375 342.797 280.562 312.578C288.156 304.969 294.25 296.578 298.469 288H248C234.75 288 224 277.25 224 264S234.75 240 248 240H328C341.25 240 352 250.75 352 264V274.906Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M327.93 240H247.93C234.68 240 223.93 250.75 223.93 264S234.68 288 247.93 288H298.398C294.18 296.578 288.086 304.969 280.492 312.578C250.305 342.797 197.555 342.797 167.367 312.578C136.18 281.375 136.18 230.625 167.367 199.422C197.586 169.172 248.023 167.797 279.93 196.359C289.742 205.219 304.93 204.438 313.805 194.5C322.648 184.625 321.805 169.453 311.93 160.609C261.398 115.313 181.336 117.547 133.43 165.484C83.523 215.391 83.523 296.609 133.43 346.516C157.586 370.688 189.742 384 223.93 384S290.273 370.688 314.43 346.516C333.961 326.953 347.148 303.078 351.523 279.25C351.805 277.828 351.93 276.359 351.93 274.906V264C351.93 250.75 341.18 240 327.93 240Z" })
    ]
  }
));
SquareGDuotone.displayName = "SquareGDuotone";
var SquareG_default = SquareGDuotone;
