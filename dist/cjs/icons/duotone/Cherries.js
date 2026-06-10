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
var Cherries_exports = {};
__export(Cherries_exports, {
  default: () => Cherries_default
});
module.exports = __toCommonJS(Cherries_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CherriesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M283.262 224C257.835 224 227.447 230.769 191.937 246.383C156.428 230.769 126.039 224 100.612 224C8.292 224 0 306.536 0 329.78C0 411.942 67.007 512 191.937 512S383.873 411.942 383.873 329.78C383.873 306.527 375.582 224 283.262 224ZM539.305 224C513.857 224 483.443 230.769 447.904 246.383C419.885 234.072 395.243 227.539 373.518 225.207C393.284 243.29 415.888 276.423 415.888 329.788C415.888 333.947 418.633 417.656 346.303 485.258C374.092 501.785 408.029 512 447.904 512C572.939 512 640 411.943 640 329.782C640 306.528 631.702 224 539.305 224Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M175 239.547C191.346 222.462 238.751 159.739 264.516 19.68C266.663 8.027 276.861 0 288.075 0C315.038 0 435.014 111.051 468.248 238.414C461.697 240.805 455.049 243.356 448.109 246.406C437.25 241.633 427.047 237.969 417.176 234.84C391.83 156.174 337.494 97.691 303.609 67.383C285.492 145.369 261.215 197.207 241.654 229.529C226.422 233.174 210.051 238.584 192.27 246.406C186.318 243.789 180.664 241.678 175 239.547Z" })
    ]
  }
));
CherriesDuotone.displayName = "CherriesDuotone";
var Cherries_default = CherriesDuotone;
