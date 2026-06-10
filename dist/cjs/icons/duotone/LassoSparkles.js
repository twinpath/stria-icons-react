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
var LassoSparkles_exports = {};
__export(LassoSparkles_exports, {
  default: () => LassoSparkles_default
});
module.exports = __toCommonJS(LassoSparkles_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LassoSparklesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 181.25C576 283 449.5 362.625 288 362.625C271.25 362.625 254.625 361.75 237.999 360C242.875 374.75 245.125 390.125 244.75 405.625C243.75 464.75 194.375 512 135 512H48C39.125 512 32 504.875 32 496V464C32 455.125 39.125 448 48 448H135C147.125 448 158.875 443.125 167.5 434.375C176 425.75 180.75 414 180.625 401.75C180.5 395.75 179.625 389.625 177.999 383.875C177.25 383.875 176.625 384 176 384C131.75 384 96 355.375 96 320C96 319.125 96.25 318.25 96.25 317.375C92.375 315.25 88.5 313.125 85 311C30.25 277.125 0 231.125 0 181.25C0 79.625 126.5 0 288 0C290.977 0 293.848 0.219 296.799 0.271L284.875 28.891L245.375 45.406C236.02 50.096 228.98 58.865 225.855 68.838C134.613 83.766 64 129.949 64 181.25C64 217.625 98.25 244.125 118.75 256.75C123.5 259.75 129.25 262.5 134.75 265.375C147.625 259.25 161.75 256 176 256C209.999 256 238.75 273 250.375 296.875C262.75 298 275.25 298.875 288 298.875C407.25 298.875 512 243.875 512 181.25C512 149.58 485.039 119.871 442.988 98.232C446.035 92.629 447.969 86.408 447.969 80C447.969 65.688 439.375 51.797 424.625 44.5L387.125 28.938L378.781 8.975C494.436 32.408 576 99.691 576 181.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M572.314 426.035L522.674 405.336L501.977 355.693C500.961 353.65 498.295 352 496.016 352C493.738 352 491.068 353.65 490.053 355.693L469.354 405.336L419.711 426.035C417.684 427.051 416.029 429.721 416.029 431.996C416.029 434.262 417.684 436.947 419.711 437.963L469.354 458.662L490.053 508.301C491.068 510.342 493.738 512 496.016 512C498.295 512 500.961 510.342 501.977 508.301L522.674 458.662L572.314 437.963C574.346 436.947 576 434.262 576 431.996C576 429.721 574.346 427.051 572.314 426.035ZM412.303 74.037L362.73 53.365L362.656 53.328L341.959 3.695C340.943 1.652 338.277 0 336 0C333.719 0 331.051 1.652 330.035 3.695L309.34 53.33L309.291 53.355L259.695 74.037C257.668 75.053 256.02 77.717 256.016 79.992L256 80L256.018 80.008C256.021 82.27 257.67 84.949 259.695 85.963L309.268 106.633L309.342 106.67L330.035 156.301C331.051 158.344 333.719 160 336 160C338.277 160 340.943 158.344 341.959 156.301L362.654 106.674L362.656 106.672L362.754 106.623L412.303 85.963C414.33 84.949 415.979 82.27 415.982 80.008L416 80L415.984 79.992C415.98 77.717 414.332 75.053 412.303 74.037Z" })
    ]
  }
));
LassoSparklesDuotone.displayName = "LassoSparklesDuotone";
var LassoSparkles_default = LassoSparklesDuotone;
