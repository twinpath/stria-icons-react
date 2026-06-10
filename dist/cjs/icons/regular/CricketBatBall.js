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
var CricketBatBall_exports = {};
__export(CricketBatBall_exports, {
  default: () => CricketBatBall_default
});
module.exports = __toCommonJS(CricketBatBall_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CricketBatBallRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.999 237.574C415.999 230.504 413.301 223.434 407.907 218.039L373.555 183.688L502.629 54.617C508.877 48.371 512 40.184 512 31.996C512 14.936 498.278 0 480.004 0C471.817 0 463.628 3.125 457.379 9.371L328.305 138.438L293.954 104.086C288.559 98.691 281.489 95.996 274.419 95.996S260.278 98.691 254.883 104.086L192.001 166.969L9.592 349.367C3.731 355.228 0 363.165 0 371.38C0 474.167 108.871 511.98 140.596 511.98C148.815 511.98 156.758 508.254 162.626 502.387L260.506 404.508H260.508L407.907 257.109C413.301 251.715 415.999 244.645 415.999 237.574ZM226.565 370.566L134.176 462.953C90.768 455.367 56.624 421.223 49.03 377.813L176.001 250.852V336H261.131L226.565 370.566ZM309.133 288H224.001V202.852L274.419 152.434L294.364 172.379L311.335 189.348L339.614 217.629L359.559 237.574L309.133 288ZM431.965 352.008C387.715 352.008 351.965 387.754 351.965 432C351.965 476.25 387.715 512 431.965 512S511.965 476.25 511.965 432C511.965 387.754 476.215 352.008 431.965 352.008ZM431.965 464C414.321 464 399.965 449.645 399.965 432C399.965 414.359 414.321 400.008 431.965 400.008S463.965 414.359 463.965 432C463.965 449.645 449.61 464 431.965 464Z " })
  }
));
CricketBatBallRegular.displayName = "CricketBatBallRegular";
var CricketBatBall_default = CricketBatBallRegular;
