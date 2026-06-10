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
var CheeseSwiss_exports = {};
__export(CheeseSwiss_exports, {
  default: () => CheeseSwiss_default
});
module.exports = __toCommonJS(CheeseSwiss_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheeseSwissThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 312C145.125 312 120 337.125 120 368S145.125 424 176 424S232 398.875 232 368S206.875 312 176 312ZM176 408C153.938 408 136 390.062 136 368S153.938 328 176 328S216 345.938 216 368S198.062 408 176 408ZM316.811 32.668C313.721 32.221 310.625 32 307.549 32C293.379 32 279.574 36.684 268.227 45.512L226.256 78.447C220.744 82.773 219.184 90.084 221.453 96.711C224.033 104.242 224.791 112.609 223.088 121.357C219.365 140.463 203.559 156.016 184.371 159.285C181.535 159.768 178.74 160 176 160C166.385 160 157.465 157.143 149.977 152.256C147.219 150.457 144.084 149.535 140.975 149.535C137.631 149.535 134.316 150.6 131.531 152.787L12.244 246.396C4.514 252.463 0 261.746 0 271.572V432C0 458.51 21.49 480 48 480H464C490.51 480 512 458.51 512 432V256C512 82.297 377.301 41.426 316.811 32.668ZM496 432C496 449.645 481.645 464 464 464H48C30.355 464 16 449.645 16 432V272H312C312 302.875 337.125 328 368 328S424 302.875 424 272H496V432ZM328 272C328 249.938 345.938 232 368 232S408 249.938 408 272S390.062 312 368 312S328 294.062 328 272ZM421.389 256C414.451 232.951 393.277 216 368 216S321.549 232.951 314.611 256H25.93L141.232 165.656C151.604 172.422 163.625 176 176 176C179.619 176 183.312 175.695 187.059 175.057C212.961 170.645 233.75 150.293 238.793 124.416C240.941 113.379 240.18 102.006 236.133 91.035L278.051 58.141C286.58 51.506 296.779 47.998 307.549 47.998C309.863 47.998 312.193 48.166 314.518 48.502C369.084 56.402 496 92.436 496 256H421.389Z" })
  }
));
CheeseSwissThin.displayName = "CheeseSwissThin";
var CheeseSwiss_default = CheeseSwissThin;
