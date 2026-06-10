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
var Leaf_exports = {};
__export(Leaf_exports, {
  default: () => Leaf_default
});
module.exports = __toCommonJS(Leaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LeafThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M486.182 39.984C483.797 34.668 478.844 32 473.824 32C469.08 32 464.278 34.379 461.526 39.156C436.538 82.422 391.415 104.309 345.589 104.309C334.405 104.309 323.181 103.004 312.197 100.391C299.3 97.32 285.845 95.727 272.002 95.727V96C174.801 96 96.003 174.797 96.003 272C96.003 282.312 97.069 292.359 98.772 302.188C13.868 373.969 0.261 469.461 0.066 471C-0.497 475.375 2.613 479.375 6.988 479.938C7.331 479.969 7.675 480 8.019 480C11.972 480 15.409 477.062 15.941 473.031C16.683 467.301 29.128 384.375 102.549 319.031C123.145 393.363 191.115 448 272.002 448V447.973H272.015C294.882 447.973 316.659 443.469 336.702 435.531C441.946 400.73 512 293.246 512 165.395C512 121.891 502.67 76.758 486.182 39.984ZM330.812 420.656C311.865 428.16 292.072 431.977 272.002 432C196.016 432 132.518 378.637 116.284 307.5C165.147 269.551 237.15 240 344.001 240C348.423 240 352.001 236.406 352.001 232S348.423 224 344.001 224C238.121 224 165.016 252.953 113.905 290.812C113.161 284.566 112.003 278.441 112.003 272C112.003 183.777 183.777 112 272.002 112L279.048 111.879C289.064 112.316 298.939 113.68 308.493 115.957C320.628 118.844 333.109 120.309 345.589 120.309C399.024 120.309 446.479 94.32 473.348 50.57C487.774 84.477 496 126.043 496 165.395C496 285.387 429.965 387.84 330.812 420.656Z" })
  }
));
LeafThin.displayName = "LeafThin";
var Leaf_default = LeafThin;
