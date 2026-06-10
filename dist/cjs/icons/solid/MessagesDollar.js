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
var MessagesDollar_exports = {};
__export(MessagesDollar_exports, {
  default: () => MessagesDollar_default
});
module.exports = __toCommonJS(MessagesDollar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MessagesDollarSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 128H448V256C448 308.871 404.875 351.992 352 351.992H256V383.969C256 419.215 284.75 447.963 320 447.963H445.75L528.5 510.082C534.875 514.832 544 510.207 544 502.209V447.963H576C611.25 447.963 640 419.215 640 383.969V191.994C640 156.748 611.25 128 576 128ZM416 256.004V63.994C416 28.748 387.25 0 352 0H64C28.75 0 0 28.748 0 63.994V256.004C0 291.25 28.75 320 64 320L96 320.018V374.264C96 382.262 105.125 386.887 111.5 382.139L194.25 320.018L352 319.875C387.25 320 416 291.25 416 256.004ZM269.83 202.312C266.207 223.219 250.363 236.953 228.002 241.746V252C228.002 263.031 219.049 272 208.002 272S188.002 263.031 188.002 252V241.23C179.32 239.309 170.697 236.508 162.939 233.719L158.674 232.219C148.252 228.531 142.799 217.094 146.471 206.688C150.158 196.281 161.58 190.875 171.986 194.469L176.455 196.094C184.299 198.906 193.174 202.094 200.111 203.125C213.83 205.25 229.049 203.312 230.424 195.5C231.299 190.406 231.783 187.594 202.502 179.219L196.689 177.531C179.361 172.438 138.768 160.531 146.174 117.688C149.811 96.75 165.58 82.762 188.002 77.992V68C188.002 56.969 196.955 48 208.002 48S228.002 56.969 228.002 68V78.633C233.455 79.828 239.346 81.422 246.564 83.906C257.002 87.531 262.518 98.938 258.893 109.375C255.268 119.781 243.83 125.312 233.439 121.719C227.58 119.687 221.439 117.719 215.846 116.875C202.174 114.781 186.955 116.688 185.58 124.5C184.814 128.969 184.252 132.188 207.955 139.156L213.502 140.75C235.799 147.125 277.314 159.031 269.83 202.312Z" })
  }
));
MessagesDollarSolid.displayName = "MessagesDollarSolid";
var MessagesDollar_default = MessagesDollarSolid;
