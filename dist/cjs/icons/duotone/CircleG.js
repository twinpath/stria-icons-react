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
var CircleG_exports = {};
__export(CircleG_exports, {
  default: () => CircleG_default
});
module.exports = __toCommonJS(CircleG_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleGDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM384 274.906C384 276.359 383.875 277.828 383.594 279.25C379.219 303.078 366.031 326.953 346.5 346.516C322.344 370.688 290.188 384 256 384S189.656 370.688 165.5 346.516C115.594 296.609 115.594 215.391 165.5 165.484C213.406 117.547 293.469 115.312 344 160.609C353.875 169.453 354.719 184.625 345.875 194.5C337 204.438 321.812 205.219 312 196.359C280.094 167.797 229.656 169.172 199.438 199.422C168.25 230.625 168.25 281.375 199.438 312.578C229.625 342.797 282.375 342.797 312.562 312.578C320.156 304.969 326.25 296.578 330.469 288H280C266.75 288 256 277.25 256 264S266.75 240 280 240H360C373.25 240 384 250.75 384 264V274.906Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M359.93 240H279.93C266.68 240 255.93 250.75 255.93 264S266.68 288 279.93 288H330.398C326.18 296.578 320.086 304.969 312.492 312.578C282.305 342.797 229.555 342.797 199.367 312.578C168.18 281.375 168.18 230.625 199.367 199.422C229.586 169.172 280.023 167.797 311.93 196.359C321.742 205.219 336.93 204.438 345.805 194.5C354.648 184.625 353.805 169.453 343.93 160.609C293.398 115.313 213.336 117.547 165.43 165.484C115.523 215.391 115.523 296.609 165.43 346.516C189.586 370.688 221.742 384 255.93 384S322.273 370.688 346.43 346.516C365.961 326.953 379.148 303.078 383.523 279.25C383.805 277.828 383.93 276.359 383.93 274.906V264C383.93 250.75 373.18 240 359.93 240Z" })
    ]
  }
));
CircleGDuotone.displayName = "CircleGDuotone";
var CircleG_default = CircleGDuotone;
