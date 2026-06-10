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
var WifiFair_exports = {};
__export(WifiFair_exports, {
  default: () => WifiFair_default
});
module.exports = __toCommonJS(WifiFair_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiFairDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.151 156.719C546.308 76.281 436.183 32 319.995 32S93.683 76.281 9.839 156.719C-2.911 168.969 -3.317 189.219 8.901 201.969C21.12 214.75 41.37 215.094 54.151 202.906C125.995 133.969 220.401 96 319.995 96S513.995 133.969 585.839 202.906C592.058 208.844 600.026 211.812 607.995 211.812C616.401 211.812 624.808 208.531 631.089 201.969C643.308 189.219 642.901 168.969 630.151 156.719Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.318 352.002C284.972 352.002 256.316 380.658 256.316 416.002S284.972 480.002 320.318 480.002C355.662 480.002 384.32 451.346 384.32 416.002S355.662 352.002 320.318 352.002ZM320.32 192C250.07 192 182.414 217.562 129.82 264C116.57 275.719 115.32 295.938 127.007 309.188C138.789 322.438 158.976 323.688 172.195 312C213.07 275.875 265.695 256 320.32 256S427.57 275.875 468.445 312C474.539 317.375 482.101 320 489.632 320C498.476 320 507.289 316.344 513.632 309.188C525.32 295.938 524.07 275.719 510.82 264C458.226 217.562 390.57 192 320.32 192Z" })
    ]
  }
));
WifiFairDuotone.displayName = "WifiFairDuotone";
var WifiFair_default = WifiFairDuotone;
