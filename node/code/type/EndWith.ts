/**
 * Tはオブジェクトのプロパティとする。
 * Tのプロパティ名の末尾がUと一致するかどうかの型。
 * 
 * 一致する時true, そうでない時false
 */
export type EndWith<T extends string | number | symbol, U extends string> = T extends `${string}${U}` ? true : false;

type Target = { userId: number, productName: string, detailId: number };
type Usecase1 = { [K in keyof Target]: EndWith<K, "Id"> };
type Usecase2 = { [K in keyof Target]: EndWith<K, "Id"> extends true ? string : never };
