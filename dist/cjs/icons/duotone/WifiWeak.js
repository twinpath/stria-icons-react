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
var WifiWeak_exports = {};
__export(WifiWeak_exports, {
  default: () => WifiWeak_default
});
module.exports = __toCommonJS(WifiWeak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WifiWeakDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.995 192C249.745 192 182.089 217.562 129.495 264C116.245 275.719 114.995 295.938 126.683 309.188C138.464 322.438 158.651 323.688 171.87 312C212.745 275.875 265.37 256 319.995 256S427.245 275.875 468.12 312C474.214 317.375 481.776 320 489.308 320C498.151 320 506.964 316.344 513.308 309.188C524.995 295.938 523.745 275.719 510.495 264C457.901 217.562 390.245 192 319.995 192ZM630.151 156.719C546.308 76.281 436.183 32 319.995 32S93.683 76.281 9.839 156.719C-2.911 168.969 -3.317 189.219 8.901 201.969C21.12 214.75 41.37 215.094 54.151 202.906C125.995 133.969 220.401 96 319.995 96S513.995 133.969 585.839 202.906C592.058 208.844 600.026 211.812 607.995 211.812C616.401 211.812 624.808 208.531 631.089 201.969C643.308 189.219 642.901 168.969 630.151 156.719Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.002 352.002C284.656 352.002 256 380.658 256 416.002S284.656 480.002 320.002 480.002C355.346 480.002 384.004 451.346 384.004 416.002S355.346 352.002 320.002 352.002Z" })
    ]
  }
));
WifiWeakDuotone.displayName = "WifiWeakDuotone";
var WifiWeak_default = WifiWeakDuotone;
