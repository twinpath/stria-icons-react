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
var PenRuler_exports = {};
__export(PenRuler_exports, {
  default: () => PenRuler_default
});
module.exports = __toCommonJS(PenRuler_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PenRulerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M435.27 272.627L401.325 306.566L416.768 322.01L385.403 353.375C379.153 359.625 379.153 369.75 385.403 376C388.528 379.125 392.621 380.688 396.715 380.688S404.903 379.125 408.028 376L439.393 344.635L463.713 368.953C464.135 369.375 464.135 370.34 463.711 370.764L370.791 463.684H368.981L306.59 401.293L272.647 435.232L335.039 497.625C344.621 507.207 357.254 512 369.885 512C382.518 512 395.149 507.207 404.731 497.625L497.655 404.703C516.819 385.537 516.819 354.178 497.655 335.012L435.27 272.627ZM76.772 239.357L110.711 205.414L48.342 143.045C47.92 142.623 47.92 141.658 48.344 141.234L141.264 48.314L142.168 48C142.758 48 142.981 48.221 143.075 48.316L167.393 72.635L136.028 104C129.778 110.25 129.778 120.375 136.028 126.625C139.153 129.75 143.246 131.312 147.34 131.312S155.528 129.75 158.653 126.625L190.018 95.26L205.434 110.676L239.373 76.732L177.014 14.373C167.432 4.791 154.801 0 142.168 0C129.537 0 116.905 4.791 107.323 14.373L14.401 107.295C-4.763 126.461 -4.763 157.82 14.401 176.986L76.772 239.357ZM493.254 56.262L455.743 18.748C443.246 6.252 426.866 0 410.487 0C394.104 0 377.727 6.25 365.227 18.75L45.114 338.885C36.545 347.451 30.586 358.275 27.928 370.094L0.319 492.854C-1.701 502.967 6.159 512 15.948 512C16.994 512 18.063 511.896 19.145 511.68C19.145 511.68 103.758 493.73 141.905 484.748C153.444 482.031 163.772 476.225 172.153 467.844C221.282 418.719 406.684 233.33 493.344 146.676C518.338 121.684 518.246 81.256 493.254 56.262ZM138.211 433.902C136.096 436.018 133.707 437.365 130.903 438.025C112.727 442.307 83.438 448.738 58.207 454.203L74.756 380.627C75.422 377.668 76.907 374.973 79.053 372.824L312.977 138.887L373.11 199.02L138.211 433.902Z" })
  }
));
PenRulerRegular.displayName = "PenRulerRegular";
var PenRuler_default = PenRulerRegular;
