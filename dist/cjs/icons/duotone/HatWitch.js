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
var HatWitch_exports = {};
__export(HatWitch_exports, {
  default: () => HatWitch_default
});
module.exports = __toCommonJS(HatWitch_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HatWitchDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.004 319.996H256.02V384H320.004V319.996ZM553.438 416H22.562C10.102 416 0 426.102 0 438.559V438.676C0 445.219 2.781 451.352 7.688 455.68C30.406 475.73 88.992 512 166.359 512H409.57C486.184 512 545.539 475.742 568.305 455.723C573.219 451.398 576 445.258 576 438.707V438.559C576 426.102 565.898 416 553.438 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 416L206.98 166.395C217.977 141.398 236.723 120.773 260.34 107.148L426.676 4.281C439.176 -2.969 455.047 -0.844 465.168 9.406L534.527 82.023C543.152 90.648 546.152 103.273 542.277 114.773L511.91 192.016L497.91 149.898C493.535 136.773 481.293 128.023 467.543 128.023H428.301C414.559 128.023 402.309 136.773 397.934 149.898L391.684 168.895C386.688 183.77 387.312 200.016 393.559 214.391L481.84 416H351.945V319.996C351.945 302.371 337.574 288 319.953 288H255.969C238.348 288 223.973 302.371 223.973 319.996V416H96ZM223.949 384V416H255.949C238.277 416 223.949 401.672 223.949 384ZM319.949 416H351.949V384C351.949 401.672 337.621 416 319.949 416Z" })
    ]
  }
));
HatWitchDuotone.displayName = "HatWitchDuotone";
var HatWitch_default = HatWitchDuotone;
