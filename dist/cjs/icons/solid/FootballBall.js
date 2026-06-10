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
var FootballBall_exports = {};
__export(FootballBall_exports, {
  default: () => FootballBall_default
});
module.exports = __toCommonJS(FootballBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FootballBallSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M13.125 432.805C17.391 449.18 30.297 462.16 46.812 466.562C68.359 472.32 102.047 479.211 141.422 480L0 338.418C0.766 377.711 7.438 411.129 13.125 432.805ZM434.875 79.195C430.609 62.82 417.703 49.836 401.188 45.438C379.641 39.68 345.953 32.789 306.578 32L448 173.578C447.234 134.289 440.562 100.871 434.875 79.195ZM3.828 280.727L199.062 476.387C318.719 458.887 423.828 369.129 444.281 231.273L248.938 35.613C129.281 53.113 24.172 142.871 3.828 280.727ZM219.312 347.312C216.188 350.438 212.094 352 208 352S199.812 350.438 196.688 347.312L132.688 283.312C126.438 277.062 126.438 266.937 132.688 260.688S149.063 254.438 155.312 260.688L219.312 324.688C225.562 330.938 225.562 341.062 219.312 347.312ZM267.312 299.312C264.188 302.438 260.094 304 256 304S247.812 302.438 244.688 299.312L180.688 235.312C174.438 229.062 174.438 218.937 180.688 212.688S197.063 206.438 203.312 212.688L267.312 276.688C273.562 282.938 273.562 293.062 267.312 299.312ZM315.312 228.688C321.562 234.938 321.562 245.063 315.312 251.312C312.188 254.438 308.094 256 304 256S295.812 254.438 292.688 251.312L228.688 187.312C222.438 181.062 222.438 170.937 228.688 164.688S245.063 158.438 251.312 164.688L315.312 228.688Z" })
  }
));
FootballBallSolid.displayName = "FootballBallSolid";
var FootballBall_default = FootballBallSolid;
